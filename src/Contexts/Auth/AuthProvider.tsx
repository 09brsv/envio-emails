import { TUser } from "@/@types/User";
import React, { useEffect } from "react";
import { AuthContext } from "./AuthContexts";

export const AuthProvider = ({ children }: { children: React.ReactNode } ) => {
  const [user, setUser] = React.useState<TUser | null>(null);

  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('token');
      if (storageData) {
        const data = await api.validateToken(storageData)
        if (data.user) {
          setUser(data.user);
        }
      }
    }
  
    return () => {
      validateToken()
    }
  }, [])

  const signin = async (email: string, password: string): Promise<boolean> => {
    const data = await api.signin(email, password)

    if (data.user && data.token) return true
    return false
  }

  const signout = async () => {
    await api.signout();
    setUser(null);
    setToken("")

  }

  const setToken = (token: string) => {
    localStorage.setItem('token', token)
  }
  
  return (
    AuthContext.Provider({value: {user, signin, signout}})
  )
}