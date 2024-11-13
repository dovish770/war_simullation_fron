import UserModel from "../modelTypes/user";

export interface LoginResponse {
    user: UserModel;
    token?: string;
    message: string
  }


  

export interface LoginData {
  username: string;
  password: string;
}

