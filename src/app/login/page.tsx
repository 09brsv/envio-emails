"use client";
import FormSignin from "@/components/Forms/FormSignin";
import Link from "next/link";
export default function Login() {
  return (
    <body className=" w-full">
      <header className="h-12 flex justify-end items-center py-2 px-3 space-y-2 gap-2">
        <span className="mt-2">Não tem um cadastro ?</span>

        <Link href="/register" className="underline">
          Criar uma conta
        </Link>
      </header>
      <main className="h-[calc(100vh-3rem)] flex flex-col justify-center items-center gap-2">
        <div className=" self-start"></div>
        <p className="font-bold text-lg">Entrar</p>

        <FormSignin></FormSignin>
      </main>
    </body>
  );
}
