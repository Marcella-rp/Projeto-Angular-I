import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserData } from 'src/models/createUser-data.models';
import { LoginData } from 'src/models/login-data.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private loginsList?: LoginData[];
  private url = 'http://localhost:3000/User';

  constructor(private httpClient: HttpClient) {
    this.loginsList = [];
  }

  get logins() {
    return this.loginsList;
  }

  getLogins(): Observable<CreateUserData[]> {
    return this.httpClient.get<CreateUserData[]>(this.url);
  }

  postUsers(user: CreateUserData): Observable<CreateUserData> {
    return this.httpClient.post<CreateUserData>(this.url, user);
  }

  post(login: any) {
    this.loginsList?.push(login);
  }
}
