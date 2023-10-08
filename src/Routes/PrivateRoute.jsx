import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Component/Loader/Loader";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <Loader></Loader>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
