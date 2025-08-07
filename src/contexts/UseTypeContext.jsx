import { useContext } from "react";
import { TypeContext } from "./TypeContext";
import { AuthContext } from "./AuthContext";

export const useType = () => {
    return useContext(TypeContext);
};

export const useAuthType = () => {
    return useContext(AuthContext);
};
