"use client";

import { useState, FC, useContext } from "react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { StateAction, StateDispatchContext } from "@/contexts/StateContext";
import { useAuth } from "@/hooks/useAuth";

export const LoginForm: FC = ({}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, loading, error } = useAuth();

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
          error={!!error}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          error={!!error}
        />
        {error ? (
          <div className="text-red-500">
            Username or Password was incorrect.
          </div>
        ) : null}
        <Button onClick={() => authenticate(name, password)}>
          {loading ? "..." : "Login"}
        </Button>
      </div>
    </div>
  );
};
