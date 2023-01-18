import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateUserData } from 'src/models/createUser-data.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginsData!: any;
  public form!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}
  //Login
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }

  public loginForm(event: any): void {
    event.preventDefault();
    this.loginsData = this.form.getRawValue();
    console.log(this.loginsData);
    this.loginService
      .getUsersLogins()
      .subscribe((loginsDataApi: CreateUserData['loginData']) => {
        let logged: boolean = false;
        let loginList = JSON.stringify(loginsDataApi);
        for (let index = 0; index < loginList.length; index++) {
          console.log(loginList);
        }
        if (
          loginsDataApi.userName === this.loginsData.userName &&
          loginsDataApi.password === this.loginsData.password
        ) {
          console.log('logou');
          logged = true;
        }

        if (!logged) {
          console.log('não logou');
        }
      });
  }
}
