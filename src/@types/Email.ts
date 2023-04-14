export type TEMailSend = {
  recipient: string;
  subject: string;
  text: string;
};

export interface TSentEmail extends TEMailSend {
  data: Date
}
