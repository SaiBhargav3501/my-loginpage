import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  {
    path: '',component:AdminsComponent,
    
  }
];      
@NgModule({
  declarations: [
    AdminsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminsRoutingModule,
    [RouterModule.forChild(routes)]
    
  ]
})
export class AdminsModule { }
