import React from "react";
import cookies from "js-cookie";
import { AuthContext } from "./AuthContexts";
import { useApi } from "@/components/Hooks/FetchApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  

  const api = useApi();

  const signin = async (
    email: string,
    password: string
  ): Promise<boolean | Error> => {
    const data = await api.signin(email, password);

    if (data instanceof Error) {
      return data;
    }

    if (data.user && data.token) {
      cookies.remove('token')
      cookies.set('token', data.token);

      return true;
    }
    return false;
  };

  const signout = () => {
    cookies.remove('token')    
  };

  return (
    <AuthContext.Provider value={{ signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
