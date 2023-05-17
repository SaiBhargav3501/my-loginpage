import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { allServices } from './services/loginServe';
import { EncrDecrServiceService } from './services/enc-dec-service';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
// import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/auth-gaurd-service';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AdminComponent } from './components/admin/admin.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingService } from './services/errorhanding.service';
import { LoginSerInterceptor } from './login-ser.interceptor';
import { TodooComponent } from './todoo/todoo.component';
const appRoutes:Routes=[
  {path: '', component:LoginComponent},
  { 
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module')  
   .then(m => m.AdminModule)  ,
    canActivate: [ AuthGuardService ] 
  }
  // { 
  //   path: 'admin/admins',
  //   loadChildren:()=>import ('./admins/admins.module').then(m=>m.AdminsModule),
  //   canActivate:[AuthGuardService]
  // }


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodooComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [allServices,EncrDecrServiceService,AuthService,AuthGuardService,JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, {provide:HTTP_INTERCEPTORS,useClass:LoginSerInterceptor,multi:true},LoginSerInterceptor,ErrorHandlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
