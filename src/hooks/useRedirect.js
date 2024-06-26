import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post("/dj-rest-auth/token/refresh/");
                // Execute following code if the user is logged in
                if (userAuthStatus === "loggedIn") {
                    history.push("/");
                }
            } catch (error) {
                // Execute following code if the user is not logged in
                if (userAuthStatus === "loggedOut") {
                    history.push("/");
                }
            }
        };

        handleMount();
    }, [history, userAuthStatus]);
};