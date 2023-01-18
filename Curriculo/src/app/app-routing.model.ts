import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
// import { InfoGeneralDynamicComponent } from './components/info-general-dynamic/info-general-dynamic.component';
// import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { ListUserComponent } from './components/list-user/list-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list-user', pathMatch: 'full' },
  { path: 'list-user', component: ListUserComponent },
  // { path: 'info-general-dynamic', component: InfoGeneralDynamicComponent },
  // { path: 'info-general', component: InfoGeneralComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
