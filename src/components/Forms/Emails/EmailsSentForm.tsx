import { TEMailSend } from "@/@types/Email";
import InputSendEmail from "../Inputs/InputSendEmail";
import LabelSendEmail from "../Labels/LabelSendEmail";
import TextArea from "../Inputs/TextArea";

type TBodyEmail = {
  to: string;
  subject: string;
  body: string;
  date: string
}

export default function EmailsSentForm({to, subject, body, date}: TBodyEmail) {

  return (
    <form className="flex flex-col h-full w-full bg-blackBg">
      <LabelSendEmail className="" htmlFor="recipient">
        <span className="font-semibold">Para:</span>
        <InputSendEmail
          className=""
          type="email"
          name="recipient"
          value={to}
          defaultValue={to}
          disabled={true}
        />
      </LabelSendEmail>

      <LabelSendEmail className="" htmlFor="subject">
        <span className="font-semibold">Assunto:</span>
        <InputSendEmail
          className=""
          type="text"
          name="subject"
          value={subject}
          defaultValue={subject}
          disabled={true}
        />
      </LabelSendEmail>
      <div className="flex gap-2 justify-end text-base p-2">
        <span className="font-semibold">Data do envio:</span>
        <span className="font-light">{date}</span>
      </div>
      <TextArea
        className="font-light border-none"
        name="text"
        value={body}
        defaultValue={body}
        disabled={true}
      />
    </form>
  );
}
