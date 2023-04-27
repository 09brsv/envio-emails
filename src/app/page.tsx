import ButtonForm from "@/components/Button/Button";
import Link from "next/link";


export default function Home () {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-3xl">Olá, seja bem vindo(a)</h1>
      <ButtonForm className="bg-blueDark">
        <Link href="/login">Testar o projeto</Link>
      </ButtonForm>
    </div>
  );
}