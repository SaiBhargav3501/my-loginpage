import { ErrorHandlingService } from './../services/errorhanding.service';
import { LoginSerInterceptor } from '../login-ser.interceptor';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { allServices } from '../services/loginServe';
import * as CryptoJS from 'crypto-js';
import { EncrDecrServiceService } from '../services/enc-dec-service';
import { Router, CanActivate, Route } from '@angular/router';
import { AuthGuardService } from '../services/auth-gaurd-service';
// import { ErrorHandlingService } from '../services/errorhanding.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url="http://rpalhamra.com:8087/api/logout"

  othurl=" http://rpalhamra.com:8087/"

  constructor(private http:HttpClient,
   private enc:EncrDecrServiceService,
    private loginSer:allServices,
    private auth:AuthGuardService,
    private router:Router,
    private loginAll:ErrorHandlingService ,
    private loginIntercep:LoginSerInterceptor){

  }
  errorMSg:any=""
  loginform = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  get username() {
    return this.loginform.get('username')

  }
  get password() {
    return this.loginform.get('password')

  }
  authenticate(){
    
    if (this.loginform.invalid) {
   
      this.validateAllFormFields(this.loginform);
      
      
      return;
    }else{
      let val=this.loginform.value.password
       let passen=this.enc.set(val)

      let data={
        "username":this.loginform.value.username,
        "password":passen
      }
      console.log(data)
      this.loginSer.getlogin(data).subscribe((resp)=>{
       
        if (resp.statusCode === 200){
          console.log("Success")
          localStorage.setItem('all_users',JSON.stringify(data));
          localStorage.setItem('token',resp.token);
          // this.auth.canActivate()
          this.router.navigate(['admin']);
        }
        if (resp.statusCode===404){
          console.log("error at server side")
        }
        if (resp.statusCode===401){
          console.log("incorrect username or password")
        }
      },(error:any)=>{
        console.log(error)
        this.errorMSg=error
        // this.errorMSg=this.loginAll.handleError(error)
        
      })
      
      
    }
  }

  validateAllFormFields(formGroup: FormGroup) {   
    // console.log(Object.keys(formGroup.controls))  
    Object.keys(formGroup.controls).forEach(each=>{
      let eachKey=(this.loginform.get(each))
      eachKey?.markAsTouched()
    })
  }

  set(keys:any, value:any){
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }






}
