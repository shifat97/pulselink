import { useContext } from "react";
import { TypeContext } from "./TypeContext";

export const useType = () => {
    return useContext(TypeContext);
};
