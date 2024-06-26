"use client";

import { useState, FC } from "react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const LoginForm: FC = ({}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const login = async (name: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
      credentials: "include",
    });

    if (res.status === 200) {
      router.push("/");
      return;
    }

    setError(true);
  };

  return (
    <div className="bg-white flex text-black flex-col w-96 rounded px-8 py-4 shadow-md hover:shadow-lg">
      <h1 className="text-lg font-bold">Access Gopher Media:</h1>
      <div className="flex flex-col gap-3 w-full p-4">
        <Input
          type="text"
          placeholder="username"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Username"
          error={error}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          error={error}
        />
        {error ? (
          <div className="text-red-500">
            Username or Password was incorrect.
          </div>
        ) : null}
        <Button onClick={() => login(name, password)}>Login</Button>
      </div>
    </div>
  );
};
