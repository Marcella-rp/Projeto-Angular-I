import { Injectable } from '@angular/core';
import { createApplication } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  generateToken(): String{
    return Math.random().toString(16)

  }
}
