import { LoginService } from './../components/login/services/login.service';
import { LoginData } from 'src/models/login-data.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService){}

  ngOnInit(){
    this.getLocalStorage()
  }

  loggedUser: boolean = false;
  public getLocalStorage(){
    console.log("oi")
    const isNull = JSON.parse(localStorage.getItem('USER_TOKEN')!);
    isNull === null ? this.loggedUser = false : this.loggedUser = true
  }

  logout(){
    this.loginService.logout()
  }
}
