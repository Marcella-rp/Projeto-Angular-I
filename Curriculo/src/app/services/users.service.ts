import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserData } from 'src/models/createUser-data.models';
import { LoginData } from 'src/models/login-data.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:3000/User';

  constructor(private httpClient: HttpClient) {}

  postUsers(user: CreateUserData): Observable<CreateUserData> {
    return this.httpClient.post<CreateUserData>(this.url, user);
  }

  getUsers(): Observable<CreateUserData[]> {
    return this.httpClient.get<CreateUserData[]>(this.url);
  }
}
