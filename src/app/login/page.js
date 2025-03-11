import React from "react";
import LoginForm from "../components/authentication/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
