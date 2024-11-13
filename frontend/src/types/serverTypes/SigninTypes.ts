import UserModel from "../modelTypes/user"

export interface signInData {
    username: string;
    password: string;
  }

  export interface signInResponse {
    user: UserModel;
    message: string
  }