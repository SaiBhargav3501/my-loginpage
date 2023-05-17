import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { MainAdminRoutingModule } from './main-admin-routing.module';
import { MainAdminComponent } from './main-admin.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',component:MainAdminComponent,
    
  }
];      

@NgModule({
  declarations: [
    MainAdminComponent
  ],
  imports: [
    CommonModule,
    MainAdminRoutingModule,
    [RouterModule.forChild(routes)],
    HttpClientModule
  ]
})
export class MainAdminModule { }
