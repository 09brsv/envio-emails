import InputSendEmail from "../Forms/Inputs/InputSendEmail";
import LabelSendEmail from "../Forms/Labels/LabelSendEmail";

export default function EmailsSent() {
  return (
    <div>
      <form>
        <LabelSendEmail htmlFor="recipient"></LabelSendEmail>
        <InputSendEmail
          className="form-contrjol"
          type="email"
          placeholder="Para:"
          name="recipient"
        />
        <LabelSendEmail htmlFor="subject">Assunto:</LabelSendEmail>
        <InputSendEmail type="text" placeholder="Assunto" name="subject" />
        <InputSendEmail
          type="text"
          placeholder="Escreva aqui a sua mensagem:"
          name="text"
        />
      </form>
    </div>
  );
}
