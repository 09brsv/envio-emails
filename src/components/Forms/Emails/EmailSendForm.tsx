import { ChangeEvent, FormEvent, useState } from "react";
import Api from "../../Hooks/Axios";
import { TEMailSend } from "@/@types/Email";

export default function EmailSendForm({
  children,
}: {
  children: React.ReactNode;
}) {

  const [fieldValues, setFieldValues] = useState<TEMailSend>({
    recipient: "",
    subject: "",
    text: "",
  });

  const clearAllFieldValues = () => {
    setFieldValues({ recipient: "", subject: "", text: "" });
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };
  
  const api = Api();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(fieldValues)
      await api.post("/user/sent-email", {
        to: recipient,
        subject,
        text
      });
    } catch (error) {
      console.log(error);
    }
    clearAllFieldValues()
  };

  const { recipient, subject, text } = fieldValues;

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="email"
          placeholder="Para:"
          name="recipient"
          value={recipient}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          placeholder="Assunto"
          name="subject"
          value={subject}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Escreva aqui a sua mensagem:"
          name="text"
          value={text}
          onChange={handleFormChange}
          required
        />
        <button onClick={clearAllFieldValues}>Cancelar</button>
        {children}
      </form>
    </div>
  );
}
