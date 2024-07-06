"use client";

import { StateAction, StateDispatchContext } from "@/contexts/StateContext";
import { getUser, login } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | unknown>(null);
  const dispatch = useContext(StateDispatchContext);
  const router = useRouter();

  const authenticate = async (name: string, password: string) => {
    setLoading(true);

    try {
      const { id } = await login(name, password);

      const user = await getUser(id);

      dispatch({ type: StateAction.SET_USER, payload: user });
      setLoading(false);

      router.push("/");
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { authenticate, loading, error };
}
