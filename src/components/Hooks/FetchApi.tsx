import { TDataSent, TEMailSend } from "@/@types/Email";
import { IUserRegister } from "@/@types/User";

const baseUrl = "https://api-send-emails.vercel.app";

type TResponseData = {
  user: {
    id: string;
    email: string;
    name: string;
    senha: string;
  };
  token: string;
};

type TFetchRequest = {
  resourceName: string;
  method: string;
  headers?: Record<string, string | undefined>;
  body?: BodyInit;
};
const fetchRequest = async ({
  resourceName,
  method,
  body,
  headers,
}: TFetchRequest) => {
  try {
    const response = await fetch(`${baseUrl}/${resourceName}`, {
      method,
      body,
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + headers?.token,
      },
    });
    const data = await response.json();
    
    if (data.message) throw new Error(data.message);
    return data;
  } catch (error) {
    console.log(error);
    return error
  }
};

export const useApi = () => ({
  signin: async (
    email: string,
    password: string
  ): Promise<TResponseData | Error> => {
    const params = {
      resourceName: "login",
      method: "POST",
      body: JSON.stringify({ email, password }),
    };

    const data = await fetchRequest(params);

    console.log(data);
    return data;
  },

  registerUser: async (user: IUserRegister) => {
    const params = {
      resourceName: "user",
      method: "POST",
      body: JSON.stringify(user),
    };
    const data = await fetchRequest(params);
    console.log(data);
    return data;
  },

  getEmails: async (
    token: string | undefined
  ): Promise<Error | TDataSent[]> => {
    const params = {
      resourceName: "user/sent-emails",
      method: "GET",
      body: undefined,
      headers: { token },
    };

    const data = await fetchRequest(params);
    console.log(data);
    return data;
  },

  sendEmail: async (
    token: string | undefined,
    bodyEmail: Omit<TEMailSend, "recipient">
  ) => {
    const response = await fetch(`${baseUrl}/user/sent-email`, {
      method: "POST",
      body: JSON.stringify(bodyEmail),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    return data;
  },
});
