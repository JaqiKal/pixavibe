import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";


// Create context for profile data & for setting profile data
export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

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
            <SetProfileDataContext.Provider value={setProfileData}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};