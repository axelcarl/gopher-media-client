"use client";
import { useState, FC } from "react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const RegisterForm: FC = ({}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const register = async () => {
    if (password !== confirmation) {
      setError(true);
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
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
      console.log(res);
      router.push("/");
      return;
    }

    setError(true);
  };

  return (
    <div className="bg-white flex text-black flex-col w-96 rounded px-8 py-4 shadow-md hover:shadow-lg">
      <h1 className="text-lg font-bold">Register a New Account:</h1>
      <div className="flex flex-col gap-3 w-full p-4">
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Username"
          error={error}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          error={error}
        />
        <Input
          type="password"
          placeholder="Password Confirmation"
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
          label="Confirm Your Password"
          error={error}
        />
        {error ? (
          <div className="text-red-500">Passwords do not match!</div>
        ) : null}
        <Button onClick={() => register()}>Register</Button>
      </div>
    </div>
  );
};
