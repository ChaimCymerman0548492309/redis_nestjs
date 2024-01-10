import { User } from "../entities/user.entity";



export interface LoginResponse {
    access_token: string;
    user: User;
  }
  