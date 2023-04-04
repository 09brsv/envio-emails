export type TUserAuth = {
  email: string;
  password: string;
}

export type TUser = {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface TUserRegister extends TUserAuth {

  name: string;
}