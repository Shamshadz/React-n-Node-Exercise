import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:"63e3d1ab46f5b76933e0c08b",
        username: "chandler",
        email: "chandler@gmail.com",
        profilePicture: "person/1.jpeg",
        coverPicture: "",
        isAdmin: false,
        followings: [],
        followers : []
    },
    isFetching: false,
    error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}