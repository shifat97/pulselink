import { Navigate } from "react-router";
import { useAuthType } from "../contexts/UseTypeContext";

export default function ProtectedRoute({ children }) {
    const { isLogin } = useAuthType();

    if (!isLogin) {
        return <Navigate to="/login" />;
    }

    return children;
}
