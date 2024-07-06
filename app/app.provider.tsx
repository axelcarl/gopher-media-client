"use client";

import {
  StateAction,
  StateContext,
  StateDispatchContext,
  initialState,
  reducer,
} from "@/contexts/StateContext";
import { getUserFromCookie } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useReducer } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const getUserData = useCallback(async () => {
    const path = window.location.pathname;

    if (path.includes("login") || path.includes("register")) {
      return;
    }

    try {
      const user = await getUserFromCookie();

      dispatch({ type: StateAction.SET_USER, payload: user });
    } catch (error) {
      router.push("/login");
    }
  }, [dispatch, router]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}
