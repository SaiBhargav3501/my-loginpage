import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import { AdminsComponent } from 'src/app/admins/admins.component';
const routes: Routes = [
  {
    path: '',component:AdminComponent,
    children: [
      { path: 'admin-photos' , component: PhotosComponent},
       { path: 'admin-posts', component: PostsComponent}
    ]
  }
];      

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    PostsComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
    [RouterModule.forChild(routes)],
    HttpClientModule
  ]
})
export class AdminModule { }
