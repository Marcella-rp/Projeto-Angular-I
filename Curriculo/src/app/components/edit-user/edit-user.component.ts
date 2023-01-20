import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ImageSnippet } from 'src/models/image-snippet.models';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  user!: any;
  public form!: FormGroup;
  public selectedFile!: ImageSnippet;
  public imgSrc!: string;

  constructor(
    private service: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getUserById(parseInt(id!)).subscribe((user) => {
      this.user = user;
      this.form.patchValue(this.user);
    });
  }

  private buildForm(): void {
    this.form = new FormGroup({
      loginData: new FormGroup({
        userName: new FormControl(),
        password: new FormControl(),
        date: new FormControl(new Date()),
      }),
      personalInformationData: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            '^(?!.{51})[a-zA-Zà-úÀ-Ú-]+(?: [a-zA-Zà-úÀ-Ú]+(?: [a-zA-Zà-úÀ-Ú-]+)?)?$'
          ),
        ]),
        occupation: new FormControl(),
        cpf: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[d]{3}.[d]{3}.[d]{3}-[d]{2}$'),
        ]),
        zipCode: new FormControl(null, [
          Validators.required,
          Validators.pattern('^([d]{2}).?([d]{3})-?([d]{3})'),
        ]),
        city: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            '^(?!.{51})[a-zA-Zà-úÀ-Ú-]+(?: [a-zA-Zà-úÀ-Ú]+(?: [a-zA-Zà-úÀ-Ú-]+)?)?$'
          ),
        ]),
        state: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            '^(?!.{51})[a-zA-Zà-úÀ-Ú-]+(?: [a-zA-Zà-úÀ-Ú]+(?: [a-zA-Zà-úÀ-Ú-]+)?)?$'
          ),
        ]),
        email: new FormControl(null, [
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

  public EditUserForm(event: any): void {
    let id = this.user.id;
    let image = this.user.image;
    this.user = this.form.getRawValue();
    this.user.id = id;
    this.user.image = image;
    this.service.putUser(this.user).subscribe(() => {
      this.router.navigateByUrl('list-user');
    });
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
