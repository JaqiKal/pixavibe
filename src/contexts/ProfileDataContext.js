import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

// Create context for profile data & for setting profile data
const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

// Custom hook to use profile data context & to use set profile data context
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

// Component to provide profile data and setProfileData function
export const ProfileDataProvider = ({ children }) => {
    // Initialize profileData state with empty pageProfile and popularProfiles
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });

    // Get the current user from custom hook
    const currentUser = useCurrentUser();

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post("/followers/", {
                followed: clickedProfile.id,
            });

            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id)
                    ),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnfollow = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile)
                    ),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect hook to fetch popular profiles when currentUser changes
    useEffect(() => {
        const handleMount = async () => {
            try {
                // Make a request to fetch profiles ordered by 
                // followers count in descending order
                const { data } = await axiosReq.get(
                    "/profiles/?ordering=-followers_count"
                );
                // Update profileData state with the fetched popular profiles
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: data,
                }));
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [currentUser]); // Dependency array includes currentUser

    // Provide profileData and setProfileData to children components
    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider
                value={{ setProfileData, handleFollow, handleUnfollow }}
            >
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};