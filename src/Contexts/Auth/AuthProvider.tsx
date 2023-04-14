import { TUser } from "@/@types/User";
import React from "react";
import { AuthContext } from "./AuthContexts";
import { useApi } from "@/components/Hooks/FetchApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<TUser | null>(null);

  const api = useApi();

  React.useEffect(() => {
    const validateToken = (token: string | null) => {
      if (token) {
        return setUser(token);
      }
      setUser(null);
      alert("Invalid token");
    };

    return () => {
      validateToken(localStorage.getItem("token"));
    };
  }, [api]);

  const signin = async (email: string, password: string): Promise<boolean> => {
    const data = await api.signin(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  };

  const signout = () => {
    setUser(null);
    localStorage.setItem("token", "");
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
