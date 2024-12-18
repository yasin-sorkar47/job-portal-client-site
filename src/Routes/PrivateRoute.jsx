import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/Loader/Loader";

export default function PrivateRoute({ children }) {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
}
