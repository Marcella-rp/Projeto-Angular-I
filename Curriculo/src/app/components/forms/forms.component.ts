import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { ContactFormData } from 'src/models/contact-form-data.models';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();
  public form!: FormGroup;

  ngOnInit(){
    this.buildForm();
  }

  private buildForm(): void{
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-z]$")
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._+-]+@[a-z0-9.-]+\\.[a-z]{2}$")
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  public submitForm(): void {
    alert("Mensagem enviada!")
    console.log(this.form);
   }
}
