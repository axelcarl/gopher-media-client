"use client";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const Page: FC = ({}) => {
  const router = useRouter();

  const authenticate = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authenticate`, {
      credentials: "include",
    });
    if (res.status !== 200) {
      router.push("/login");
    }
  };

  const logout = async () => {
    router.push("/login");
  }

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] py-2 px-4 shadow">
      <div></div>
      <div className="text-center p-4 text-2xl group bg-gradient-to-r from-black to-indigo-500 bg-clip-text text-transparent">
        GOPHER MEDIA
      </div>
      <button className="ml-auto hover:text-indigo-500" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

export default Page;
