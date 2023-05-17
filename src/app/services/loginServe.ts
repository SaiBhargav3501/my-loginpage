import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {environment} from "src/environments/environment"
import * as CryptoJS from 'crypto-js';

@Injectable()
export class allServices{
    constructor(private http:HttpClient){

    }
    
    Url='http://rpalhamra.com:8080/'

    getlogin(data:any):Observable <any>{
        return this.http.post(this.Url+"api/login",data)
        
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

// this.http.post(this.Url+"api/login",data).subscribe((resp)=>{
//     console.log(resp)

//  })