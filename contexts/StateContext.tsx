import { User } from "@/types/user";
import { Dispatch, createContext } from "react";

interface State {
    user: User | null,
}

export enum StateAction {
    SET_USER = "SET_USER",
}

type Action = { type: StateAction.SET_USER, payload: User }

export const initialState: State = {
    user: null
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case StateAction.SET_USER:
            state.user = action.payload
            return state
        default:
            return state
    }
}

export const StateContext = createContext<State>(initialState);
export const StateDispatchContext = createContext<Dispatch<Action>>(() => { });


