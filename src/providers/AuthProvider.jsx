import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const changeUserLogin = () => {
        setIsLogin(true);
    };

    const changeUserLogout = () => {
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                changeUserLogin,
                changeUserLogout,
                loggedInUser,
                setLoggedInUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
