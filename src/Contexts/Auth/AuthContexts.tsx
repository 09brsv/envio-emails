import { TUser } from "@/@types/User";
import { createContext } from "react";


export type TAuthContext = {
  user: TUser | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}

export const AuthContext = createContext<TAuthContext>(null!)