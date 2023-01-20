import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateUserData } from 'src/models/createUser-data.models';
import { first } from 'rxjs';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginsData!: any;
  public form!: FormGroup;

  constructor(private loginService: LoginService, private router: Router,
  private tokenService: TokenService) {}
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
    this.loginService
      .getUsersLogins()
      .pipe(first())
      .subscribe((loginsDataApi: any) => {
        let logged: boolean = false;

        for (
          let index = 0;
          index < Object.keys(loginsDataApi).length;
          index++
        ) {
          let loginList = loginsDataApi[`${index}`];
          console.log(loginList['loginData']['password']);
          if (
            loginList['loginData']['userName'] === this.loginsData.userName &&
            loginList['loginData']['password'] === this.loginsData.password
          ) {
            //alert('Sucess! Log in!');
            const USER_TOKEN = this.tokenService.generateToken()
            // const userAcess = {id: loginList['id'], token: token}
            // localStorage.setItem('userAcess', JSON.stringify(userAcess));
            // this.router.navigate(['/',''])

            localStorage.setItem('USER_TOKEN', JSON.stringify(USER_TOKEN));
            this.router.navigate(['/list-user']);

            logged = true;
          }

          if (!logged) {
            alert('User or password incorrect. Please, try again!');
          }
        }
        //
      });
  }
}
