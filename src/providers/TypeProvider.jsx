import { useState } from "react";
import { TypeContext } from "../contexts/TypeContext";

export const TypeProvider = ({ children }) => {
    const [selectedType, setSelectedType] = useState("all");

    const changeType = (type) => {
        setSelectedType(type);
    };
    return (
        <TypeContext.Provider value={{ selectedType, changeType }}>
            {children}
        </TypeContext.Provider>
    );
};
