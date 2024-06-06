"use client"

import { StateContext, StateDispatchContext, initialState, reducer } from "@/contexts/StateContext"
import { useReducer } from "react";

interface AppProviderProps {
    children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <StateDispatchContext.Provider value={dispatch}>
                {children}
            </StateDispatchContext.Provider>
        </StateContext.Provider>);
}
