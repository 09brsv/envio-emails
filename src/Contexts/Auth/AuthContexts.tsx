import { createContext } from "react";

export type TAuthContext = {
  signin: (email: string, password: string) => Promise<boolean | Error>;
  signout: () => void;
};

export const AuthContext = createContext<TAuthContext>(null!);
