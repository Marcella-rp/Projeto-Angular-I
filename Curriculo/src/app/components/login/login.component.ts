import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { CreateUserData } from 'src/models/createUser-data.models';
import { LoginData } from 'src/models/login-data.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData!: LoginData;
  public form!: FormGroup;

  constructor(
    private service: UsersService,
    private serviceLogin: LoginService,
    private router: Router
  ) {}
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
    this.loginData = this.form.getRawValue();
    this.service.getLogins().subscribe((logins: CreateUserData[]) => {
      let logged: boolean = false;
      for (let index = 0; index < logins.length; index++) {
        const user = logins[index];

        if (
          user.loginData.userName === this.loginData.userName &&
          user.loginData.password === this.loginData.password
        ) {
          console.log('logou');
          logged = true;
        }
      }
      if (!logged) {
        console.log('não logou');
      }
    });
  }

  public onSubmit(): void{
    const payload = this.form.getRawValue();
    this.serviceLogin.login(payload).subscribe({
      next: (res) => {
        console.log(payload);
        this.router.navigate(['/']);
        localStorage.setItem('USER_TOKEN', res.token);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
