import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { InfoGeneralDynamicComponent } from './components/info-general-dynamic/info-general-dynamic.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'info-general-dynamic', component: InfoGeneralDynamicComponent },
  { path: 'info-general', component: InfoGeneralComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
