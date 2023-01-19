import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserData } from 'src/models/createUser-data.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly urlApi = 'http://localhost:3000/User';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<CreateUserData[]> {
    return this.httpClient.get<CreateUserData[]>(this.urlApi);
  }

  getUserById(id: number): Observable<CreateUserData> {
    const url = `${this.urlApi}/${id}`;
    return this.httpClient.get<CreateUserData>(url);
  }

  postUsers(user: CreateUserData): Observable<CreateUserData> {
    return this.httpClient.post<CreateUserData>(this.urlApi, user);
  }

  putUser(user: CreateUserData): Observable<CreateUserData> {
    const url = `${this.urlApi}/${user.id}`;
    return this.httpClient.put<CreateUserData>(url, user);
  }

  deleteUser(id: number): Observable<CreateUserData> {
    const url = `${this.urlApi}/${id}`;
    return this.httpClient.delete<CreateUserData>(url);
  }
}
