"use client";
import FormRegister from "@/components/Forms/FormRegister";
import Link from "next/link";
export default function Register() {
  return (
    <body className=" w-full">
      <header className="h-12 flex justify-end items-center py-2 px-3 space-y-2 gap-2">
        <span className="mt-2">Já tem um cadastro ?</span>

        <Link href="/login" className="underline">
          Fazer login
        </Link>
      </header>
      <main className="h-[calc(100vh-3rem)] flex flex-col justify-center items-center gap-2">
        <div className=" self-start"></div>
        <p className="font-bold text-lg">Cadastrar</p>
        <FormRegister />
      </main>
    </body>
  );
}
