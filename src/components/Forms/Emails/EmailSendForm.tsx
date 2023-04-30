import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ChangeEvent, FormEvent, useState } from "react";
import { TEMailSend } from "@/@types/Email";
import { useApi } from "@/components/Hooks/FetchApi";
import cookies from "js-cookie";
import InputSendEmail from "../Inputs/InputSendEmail";
import LabelSendEmail from "../Labels/LabelSendEmail";
import ButtonForm from "@/components/Button/Button";

export default function EmailSendForm() {
  const token = cookies.get("token");
  const api = useApi();

  const [loading, setLoading] = useState<boolean>(false);

  const [fieldValues, setFieldValues] = useState<TEMailSend>({
    recipient: "",
    subject: "",
    text: "",
  });

  const clearAllFieldValues = () => {
    setFieldValues({ recipient: "", subject: "", text: "" });
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await api.sendEmail(token, {
      to: recipient,
      subject,
      text,
    });

    setLoading(false);
    toast.success("Email enviado com sucesso", {
      position: "top-center",
    });
    clearAllFieldValues();
  };

  const { recipient, subject, text } = fieldValues;

  return (
    <form
      className="flex flex-col h-full"
      onSubmit={handleSubmit}
      method="post"
      autoComplete="off"
    >
      <LabelSendEmail className="" htmlFor="recipient">
        <strong>Para:</strong>
        <InputSendEmail
          className=""
          type="email"
          name="recipient"
          value={recipient}
          onChange={handleFormChange}
        />
      </LabelSendEmail>

      <LabelSendEmail className="" htmlFor="subject">
        <strong>Assunto:</strong>
        <InputSendEmail
          className=""
          type="text"
          name="subject"
          value={subject}
          onChange={handleFormChange}
        />
      </LabelSendEmail>

      <textarea
        className="h-3/5 px-6 py-8 bg-blackBg border border-whiteText/30 outline-none resize-none"
        placeholder="Escreva aqui a sua mensagem:"
        name="text"
        value={text}
        onChange={handleFormChange}
        required
      />

      <div className="w-full h-1/6 flex justify-around py-3">
        <ButtonForm
          className="self-end bg-redBg hover:bg-redBg/80"
          type="reset"
          onClick={clearAllFieldValues}
        >
          Apagar tudo
        </ButtonForm>
        <ButtonForm
          className="self-end bg-blueDark"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </ButtonForm>
      </div>
      <ToastContainer autoClose={3000} />
    </form>
  );
}
