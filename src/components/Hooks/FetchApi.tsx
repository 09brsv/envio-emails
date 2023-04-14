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

export const useApi = () => ({
  // validateToken: async (token: string) => {
  //   const response = await fetch(`${baseUrl}/validateToken`, {
  //     headers: {"Content-Type": "application/json"},
  //     method: "POST",
  //     body: JSON.stringify(token)
  //   });
  //   const data: Partial<TResponseData> = await response.json();
  //   return data.data;
  // },

  signin: async (email: string, password: string) => {
    const body = JSON.stringify({ email, password });

    const response = await fetch(`${baseUrl}/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body,
    });
    const data: TResponseData = await response.json();
    console.log(data);
    return data;
  },
});
