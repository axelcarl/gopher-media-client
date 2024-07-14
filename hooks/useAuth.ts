"use client";

import { StateContext } from "@/contexts/StateContext";
import { User } from "@/types/user";
import { useContext } from "react";

export function useAuth(): User | null {
  const state = useContext(StateContext);

  return state.user;
}
