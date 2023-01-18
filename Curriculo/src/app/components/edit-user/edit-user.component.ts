import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { CreateUserData } from 'src/models/createUser-data.models';
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
        name: new FormControl(),
        occupation: new FormControl(),
        cpf: new FormControl(),
        zipCode: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        email: new FormControl(),
        phone: new FormControl(),
      }),
      skillName: new FormControl(),
      skillLevel: new FormControl(),
      languageName: new FormControl(),
      languagelevel: new FormControl(),
    });
  }

  public EditUserForm(event: any): void {
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
