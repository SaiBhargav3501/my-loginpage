import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-gaurd-service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminsComponent } from './admins/admins.component';
import { TodosComponent } from './todos/todos.component';
import { MainAdminComponent } from './comp/main-admin/main-admin.component';
const routes: Routes = [{path: '', component:LoginComponent},
{ 
  path: 'home',
  component: HomeComponent,
  canActivate: [ AuthGuardService ] 
},
{ 
  path: 'admin',
  component: AdminComponent,
  canActivate: [ AuthGuardService ] 
},
{ 
  path: 'admin/admins',
  component:AdminsComponent,
  canActivate: [ AuthGuardService ] 
},
{ 
  path: 'admin/todos',
  component:TodosComponent,
  canActivate: [ AuthGuardService ] 
},
{ 
  path: 'mainadmin',
  component:MainAdminComponent,
  canActivate: [ AuthGuardService ] 
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
