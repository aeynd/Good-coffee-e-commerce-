import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectAdminRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser?.role !== "ADMIN") {
      return <Navigate to={"/"} />
  }
  return children;
}
