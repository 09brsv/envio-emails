import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TUserAuth } from "@/@types/User";
import { AuthContext } from "@/Contexts/Auth/AuthContexts";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import LabelSign from "./Labels/LabelSign";
import ButtonForm from "../Button/Button";
import InputUser from "./Inputs/InputUser";

export default function Login() {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [fieldValues, setFieldValues] = useState<TUserAuth>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [inputPassword, setInputPassword] = useState<boolean>(false);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };
  const { email, password } = fieldValues;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const isLoggedIn = await auth.signin(email, password);

    if (isLoggedIn instanceof Error) {
      toast.warn("Usuário e/ou senha mal informado", {
        position: "top-center",
      });
      setLoading(false);
      setFieldValues({
        email,
        password: "",
      });
      return;
    }

    if (isLoggedIn) {
      setLoading(false);
      router.push("/user/emails-sent");
    }
  };

  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={handleSubmit}
      method="post"
    >
      <LabelSign htmlFor="email">Digite o seu email</LabelSign>
      <InputUser
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleFormChange}
        required
      />
      <LabelSign className="mt-2" htmlFor="password">
        Digite a sua senha
      </LabelSign>
      <div className="flex relative">
        <InputUser
          type={inputPassword ? "text" : "password"}
          className="w-full"
          name="password"
          minLength={3}
          value={password}
          placeholder="********"
          onChange={handleFormChange}
          autoComplete="on"
          required
        />
        <div
          className="flex items-center h-full w-6 absolute right-4 cursor-pointer"
          onClick={() => setInputPassword((v) => !v)}
        >
          {inputPassword ? (
            <AiFillEyeInvisible fontSize="25" color="gray" />
          ) : (
            <AiFillEye fontSize="25" color="gray" />
          )}
        </div>
      </div>
      <ButtonForm
        className="mt-2 w-48 md:w-56 bg-blueDark self-center"
        type="submit"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </ButtonForm>
      <ToastContainer />
    </form>
  );
}
