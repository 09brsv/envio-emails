"use client"
import ButtonForm from "@/components/Button/Button";
import EmailSendForm from "@/components/Forms/Emails/EmailSendForm";
import NavBarHeader from "@/components/Nav/NavBarHeader";

export default function SendEmail() {
  return (
    <div>
      <nav>
        <ul>
          <NavBarHeader text="Novo destinatário" />
          <NavBarHeader text="Enviar para vários destinatários" />
          <NavBarHeader text="Emails enviados" />
        </ul>
      </nav>
      <EmailSendForm>
        <ButtonForm text="Enviar" typeButton="submit"></ButtonForm>
      </EmailSendForm>
    </div>
  );
}
