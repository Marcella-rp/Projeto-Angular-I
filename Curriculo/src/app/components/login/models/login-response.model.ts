import { LoginData } from 'src/models/login-data.models';

export interface LoginResponse {
  user: LoginData;
  token: string;
}
