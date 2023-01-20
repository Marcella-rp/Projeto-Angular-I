import { LoginService } from './../components/login/services/login.service';
import { LoginData } from 'src/models/login-data.models';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService, private router: Router){
    router.events.subscribe(x => {
      this.getLocalStorage()
    });
  }

  ngOnInit(){
    this.getLocalStorage()
  }

  loggedUser: boolean = false;
  public getLocalStorage(){
    const isNull = JSON.parse(localStorage.getItem('USER_TOKEN')!);
    isNull === null ? this.loggedUser = false : this.loggedUser = true
  }

  logout(){
    this.loginService.logout()
  }
}
