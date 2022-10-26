import React from "react";
import { Navigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";

const Auth = () => {
  if (window.localStorage.getItem("authToken")) {
    return <Navigate to="/todo"></Navigate>;
  }

  return <AuthForm />;
};

export default Auth;
