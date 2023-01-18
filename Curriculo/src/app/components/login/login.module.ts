import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
