import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoGeneralDynamicComponent } from './components/info-general-dynamic/info-general-dynamic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserComponent } from './components/user/user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    FooterComponent,
    InfoGeneralComponent,
    CreateUserComponent,
    InfoGeneralDynamicComponent,
    LoginComponent,
    ListUserComponent,
    UserComponent,
    DeleteUserComponent,
    EditUserComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskPipe,
    NgxMaskDirective,
    BrowserAnimationsModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
