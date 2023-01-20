import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { CreateUserData } from 'src/models/createUser-data.models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/User';
  constructor(private httpClient: HttpClient, private router: Router) {}

  public login(payload: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      'http://localhost:3000/login',
      payload
    );
  }

  getUsersLogins(): Observable<CreateUserData['loginData']> {
    return this.httpClient.get<CreateUserData['loginData']>(this.url);
  }

  public logout(): void {
    localStorage.removeItem('USER_TOKEN');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }
}
