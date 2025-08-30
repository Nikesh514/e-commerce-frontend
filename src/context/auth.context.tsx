import { createContext, useState } from 'react'
import type { IUser } from '../types/user.types';

interface IAuthContextType {
    user:IUser | null;
    isLoading:boolean,
    token:string | null
    setUser:(user:IUser) => void,
    setToken:(token:string) => void
}

// 1. Create the context
const AuthContext = createContext<IAuthContextType | null>(null)

// 2. Context Provider

export const AuthProvider = ({ children }:Readonly<{ children: React.ReactNode}>) => {
    // manage state here
    const [user, setUser] = useState<IUser | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [token, setToken] = useState<string | null>(null)

    return (
        <AuthContext.Provider value={{user, isLoading, token, setUser, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}