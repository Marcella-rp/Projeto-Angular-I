import { Component, OnInit } from '@angular/core';
import { DataApp } from 'src/models/data-app.models';
import { LoginService } from './components/login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public user: string = 'userAcess';

  ngOnInit(): void {
    localStorage.setItem(this.user, '');
  }

  constructor (private loginService: LoginService){}

  public logout(): void{
    this.loginService.logout();
  }
}
