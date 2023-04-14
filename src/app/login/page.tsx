"use client";
import ButtonForm from "@/components/Button/Button";
import FormSignin from "@/components/Forms/FormSignin";
export default function Login() {
  return (
    <div>
      <FormSignin>
        <ButtonForm text="Entrar" typeButton="submit" />
      </FormSignin>
    </div>
  );
}
