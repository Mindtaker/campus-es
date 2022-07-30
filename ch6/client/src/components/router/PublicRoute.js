import { Navigate, Outlet } from "react-router-dom";
import { ALL_POSTS } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={ALL_POSTS} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
