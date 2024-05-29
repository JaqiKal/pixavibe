import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

/* Creating two context objects, one for the current 
* user state and one for the setter function
*/
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Custom hooks for consuming the context values
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// Provider component to wrap the application and provide the context values
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();

    // Function to get the current user from the API when the component mounts
    const handleMount = async () => {
        try {
            const { data } = await axios.get("dj-rest-auth/user/");
            setCurrentUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect to run the handleMount function when the component mounts
    useEffect(() => {
        handleMount();
    }, []);

    // useMemo to set up axios interceptors for handling request and response
    useMemo(() => {
        // Request interceptor to refresh the access token before making a request
        axiosReq.interceptors.request.use(
            async (config) => {
                try {
                    await axios.post("/dj-rest-auth/token/refresh/");
                } catch (err) {
                    // If refresh token is invalid, redirect to sign-in and set currentUser to null
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push("/signin");
                        }
                        return null;
                    });
                    return config;
                }
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );
        // Response interceptor to handle 401 errors and refresh the access token
        axiosRes.interceptors.response.use(
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (err) {
                        // If refresh token is invalid, redirect to sign-in and set currentUser to null
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                history.push("/signin");
                            }
                            return null;
                        });
                    }
                    return axios(err.config);
                }
                return Promise.reject(err);
            }
        );
        // Dependency array ensures useMemo runs when 'history' changes
    }, [history]);

    return (
        // Providing the currentUser and setCurrentUser values to the children components
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};