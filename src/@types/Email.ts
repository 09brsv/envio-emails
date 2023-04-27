export type TEMailSend = {
  recipient: string;
  to?: string;
  subject: string;
  text: string;
};

export type TDataSent = {
  id: number;
  body: string;
  email: string;
  subject: string;
  date: string;
  id_user: number;
};

export interface TSentEmail extends TEMailSend {
  data: Date
}
