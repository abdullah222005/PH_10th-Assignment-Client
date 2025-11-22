import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../Auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-2xl text-center flex gap-3 wholeSpinner">
        <span className="spinner">🌀</span>
        <span className="spinner">🌀</span>
        <span className="spinner">🌀</span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
};

export default PrivateRoute;
