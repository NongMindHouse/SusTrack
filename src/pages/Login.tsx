import LoginForm from "@/components/Login/LoginForm";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="bg-gray-50 flex items-center flex-col relative">
      <section className="w-full bg-hero bg-cover bg-center py-24 h-screen">
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
