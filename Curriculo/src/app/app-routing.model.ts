import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list-user', pathMatch: 'full' },
  { path: 'list-user', component: ListUserComponent },
  // { path: 'info-general-dynamic', component: InfoGeneralDynamicComponent },
  // { path: 'info-general', component: InfoGeneralComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/deleteUser/:id', component: DeleteUserComponent },
  { path: 'user/editUser/:id', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
