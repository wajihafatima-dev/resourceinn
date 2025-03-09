import React from "react";
import SignupForm from "../components/authentication/SignupForm";
import AuthLayout from "../layouts/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
