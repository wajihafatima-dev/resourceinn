import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./components/authentication/LoginForm";

export default function Home() {
  return (
    <AuthLayout>
    <LoginForm />
  </AuthLayout>
  );
}
