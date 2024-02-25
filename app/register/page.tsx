import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";
import { FC } from "react";
import { FaBackward } from "react-icons/fa6";

const RegisterPage: FC = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col">
      <Link
        href="/login"
        className="ml-auto p-8 hover:text-indigo-500 font-semibold underline flex gap-2 items-center cursor-pointer"
      >
        <FaBackward />
        Back to Login
      </Link>
      <div className="w-full h-3/4 grid place-items-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
