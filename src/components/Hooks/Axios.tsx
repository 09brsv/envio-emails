import { AuthContext } from "@/Contexts/Auth/AuthContexts";
import axios from "axios";
import { useContext } from "react";

export default function Api(){
  const token = useContext(AuthContext);
  console.log(token.user);
  
  return axios.create({
    baseURL: "https://api-send-emails.vercel.app",
    headers: { Authorization: `Bearer ${token.user}`}
  });
}
// export const api = axios.create({
//   baseURL: "https://api-send-emails.vercel.app",
// });