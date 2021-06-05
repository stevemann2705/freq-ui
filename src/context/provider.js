import React, { createContext, useReducer, Children } from "react";
import auth from "./reducers/auth";
import authInitialState from "./initialStates/authInitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);

    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
