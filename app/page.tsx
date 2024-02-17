"use client";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const Page: FC = ({}) => {
  const router = useRouter();

  const authenticate = async () => {
    const res = await fetch("http://localhost:8080/authenticate", {
     credentials: "include"
    });
    if (res.status !== 200) {
      router.push("/login");
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return <div>Home</div>;
};

export default Page;
