"use client";
import { useState, FC } from "react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";

export const Login: FC = ({}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (name: string, password: string) => {
    const res = await fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
      credentials: "include"
    });

    const json = await res.json();
    if (res.status === 200) {
      router.push("/");
    } 
  };

  return (
    <div className="bg-white flex text-black flex-col w-96 rounded px-8 py-4 shadow-md hover:shadow-lg">
      <h1 className="text-lg font-bold">
        Access Gopher Media:
      </h1>
      <div className="flex flex-col gap-3 w-full p-4">
        <Input
          type="text"
          placeholder="username"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Username"
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
        />
        <button
          onClick={() => login(name, password)}
          className="bg-black text-white rounded-lg px-4 py-2 w-min hover:bg-indigo-500"
        >
          Login
        </button>
      </div>
    </div>
  );
};
