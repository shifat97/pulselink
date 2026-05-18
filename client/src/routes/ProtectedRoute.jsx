import { Navigate } from "react-router";
import { useAuthType } from "../contexts/UseTypeContext";

export default function ProtectedRoute({ children }) {
  const { isLogin, loading } = useAuthType();

  if (loading) {
    // You can replace this with a spinner if you want
    return <div>Loading...</div>;
  }

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
}
