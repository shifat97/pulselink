import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login: set state and localStorage
  const changeUserLogin = (user) => {
    setIsLogin(true);
    setLoggedInUser(user);
    localStorage.setItem(
      "auth",
      JSON.stringify({ status: true, jwtToken: user.jwtToken, name: user.name })
    );
  };

  // Logout: clear state and localStorage
  const changeUserLogout = () => {
    setIsLogin(false);
    setLoggedInUser(null);
    localStorage.removeItem("auth");
  };

  // On mount, restore state from localStorage
  useEffect(() => {
    const getLoginStateFromLS = JSON.parse(localStorage.getItem("auth"));
    if (getLoginStateFromLS && getLoginStateFromLS.status) {
      setIsLogin(true);
      setLoggedInUser(getLoginStateFromLS.user);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        changeUserLogin,
        changeUserLogout,
        loggedInUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
