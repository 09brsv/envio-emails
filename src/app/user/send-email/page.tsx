"use client";

import EmailSendForm from "@/components/Forms/Emails/EmailSendForm";
import BackIcon from "@/components/Icons/Back";
import Logout from "@/components/Icons/Logout";
import Li from "@/components/Nav/Li";
import NavBarHeader from "@/components/Nav/NavBarHeader";
import Ul from "@/components/Nav/Ul";
import Link from "next/link";

export default function SendEmail() {
  let smallSizeText
  return (
    <div className="h-screen flex flex-col bg-blackBg border border-whiteText/30">
      <div className="flex justify-between sm:justify-end">
        <BackIcon href="user/emails-sent" />
        <Logout />
      </div>
      <NavBarHeader>
        <Ul>
          <Li className="underline text-whiteText/80 sm:basis-1/2">Novo destinatário</Li>

          <Li className="sm:basis-1/4">
            <Link className="hidden lg:block hover:text-whiteText/80" href="/user/send-all">
              Enviar para vários destinatários
            </Link>
            <Link className="lg:hidden hover:text-whiteText/80" href="/user/send-all">
              Enviar para vários
            </Link>
          </Li>

          <Li className="hidden sm:block sm:basis-1/4">
            <Link className="hover:text-whiteText/80" href="/user/emails-sent">
              Emails enviados
            </Link>
          </Li>
        </Ul>
      </NavBarHeader>
      <EmailSendForm />
    </div>  
  );
}
