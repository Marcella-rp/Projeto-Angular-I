import { ViaCepService } from './../../services/via-cep.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateUserData } from 'src/models/createUser-data.models';
import { UsersService } from 'src/app/services/users.service';
import { ImageSnippet } from 'src/models/image-snippet.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  createData!: CreateUserData;
  public form!: FormGroup;
  public selectedFile!: ImageSnippet;
  public imgSrc!: string;

  constructor(
    private service: UsersService,
    private router: Router,
    private viaCepService: ViaCepService
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      loginData: new FormGroup({
        userName: new FormControl(),
        password: new FormControl(),
        date: new FormControl(new Date()),
      }),
      personalInformationData: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            '^(?!.{51})[a-zA-Zà-úÀ-Ú-]+(?: [a-zA-Zà-úÀ-Ú]+(?: [a-zA-Zà-úÀ-Ú-]+)?)?$'
          ),
        ]),
        occupation: new FormControl(),
        cpf: new FormControl('', [Validators.required]),
        zipCode: new FormControl([
          Validators.required,
          Validators.pattern('^([d]{2}).?([d]{3})-?([d]{3})'),
        ]),
        city: new FormControl([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            '^(?!.{51})[a-zA-Zà-úÀ-Ú-]+(?: [a-zA-Zà-úÀ-Ú]+(?: [a-zA-Zà-úÀ-Ú-]+)?)?$'
          ),
        ]),
        state: new FormControl([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            '^(?!.{51})[a-zA-Zà-úÀ-Ú-]+(?: [a-zA-Zà-úÀ-Ú]+(?: [a-zA-Zà-úÀ-Ú-]+)?)?$'
          ),
        ]),
        email: new FormControl([
          Validators.required,
          Validators.email,
          Validators.pattern('[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+.[a-z]{2,3}'),
        ]),
        phone: new FormControl(),
      }),
      skillName: new FormControl(),
      skillLevel: new FormControl(),
      languageName: new FormControl(),
      languagelevel: new FormControl(),
    });
  }

  public searchFormCep() {
    let cep = this.form.get('personalInformationData.zipCode')?.value;

    if (cep != null && cep !== '') {
      this.viaCepService
        .searchCep(cep)
        ?.subscribe((adress) => this.fillforms(adress));
    }
  }

  fillforms(adress: any) {
    this.form.patchValue({
      personalInformationData: {
        city: adress.localidade,
        state: adress.uf,
      },
    });
  }

  public CreateUserForm(event: any): void {
    this.createData = this.form.getRawValue();
    this.createData.image = document
      .querySelector('#img__preview')
      ?.getAttribute('src');
    this.service.postUsers(this.createData).subscribe(
      (result) => {
        console.log(result);

        alert('user created successfully');

        let userIndex!: string;

        this.service.getUsers().subscribe((logins: CreateUserData[]) => {
          let quantify = logins.length - 1;
          userIndex = quantify.toString();
          let user = 'userAcess';
          localStorage.setItem(user, userIndex);
          this.router.navigateByUrl('info-general-dynamic');
        });
      },
      (error) => alert('User not created successfully... Try again!')
    );
  }

  public previewFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public CancelUserForm() {
    this.router.navigateByUrl('list-user');
  }
}
