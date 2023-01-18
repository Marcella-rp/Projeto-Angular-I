import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoGeneralDynamicComponent } from './components/info-general-dynamic/info-general-dynamic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserComponent } from './components/user/user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    FooterComponent,
    InfoGeneralComponent,
    ExperienceComponent,
    FormsComponent,
    CreateUserComponent,
    InfoGeneralDynamicComponent,
    LoginComponent,
    ListUserComponent,
    UserComponent,
    DeleteUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
