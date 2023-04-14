import { TUserAuth } from "@/@types/User";
import { AuthContext } from "@/Contexts/Auth/AuthContexts";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, ReactNode, useContext, useState } from "react";

export default function Login({ children }: { children: ReactNode }) {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [fieldValues, setFieldValues] = useState<TUserAuth>({
    email: "",
    password: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };
  const { email, password } = fieldValues;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(fieldValues);
    const isLoggedIn = await auth.signin(email, password);
    
    if (isLoggedIn) {      
      router.push('/user/emails-sent')
    }else {      
      alert('login to dashboard is failed')
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <label htmlFor="email">Digite o seu email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleFormChange}
        required
      />
      <label htmlFor="password">Digite a sua senha</label>
      <input
        type="password"
        name="password"
        minLength={3}
        value={password}
        onChange={handleFormChange}
        required
      />
      {children}
    </form>
  );
}
