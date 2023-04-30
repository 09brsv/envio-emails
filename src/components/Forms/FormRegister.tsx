import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IUserRegister } from "@/@types/User";
import { ChangeEvent, FormEvent, useState } from "react";
import { useApi } from "../Hooks/FetchApi";
import InputUser from "./Inputs/InputUser";
import LabelSign from "./Labels/LabelSign";
import ButtonForm from "../Button/Button";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function FormRegister() {
  const api = useApi();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const [inputPassword, setInputPassword] = useState<boolean>(false);

  const [fieldValues, setFieldValues] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
  });

  const clearAllFieldValues = () => {
    setFieldValues({ name: "", email: "", password: "" });
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await api.registerUser(fieldValues);

    if (data instanceof Error) {
      if (data.message.includes("Email address")) {
        toast.warn("Email já cadastrado", {
          position: "top-center",
        });
        return;
      } else {
        toast.error("Erro interno, tente novamente");
        setLoading(false);
        return;
      }
    }
    toast.success("Cadastro realizado com sucesso", {
      autoClose: 2000,
    });
    setLoading(false);
    clearAllFieldValues();
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  const { name, email, password } = fieldValues;

  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={handleSubmit}
      method="post"
      autoComplete="off"
    >
      <LabelSign htmlFor="name">Digite o seu nome</LabelSign>
      <InputUser
        type="text"
        name="name"
        minLength={3}
        value={name}
        placeholder="Nome"
        onChange={handleFormChange}
        required
      />
      <LabelSign className="mt-2" htmlFor="email">
        Digite o seu email
      </LabelSign>
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
        className="mt-2 w-48 md:w-56 bg-blueDark self-center hover:opacity-90"
        type="submit"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </ButtonForm>
      <ToastContainer autoClose={3000} />
    </form>
  );
}

// export default function <Form></Form>Re
