import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import { FaForward } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center flex-col">
      <Link
        href="/register"
        className="ml-auto p-8 hover:text-indigo-500 font-semibold underline flex gap-2 items-center cursor-pointer"
      >
        Or, Register a New Account
        <FaForward />
      </Link>
      <div className="w-full h-3/4 grid place-items-center">
        <LoginForm />
      </div>
    </div>
  );
}
