import { Injectable } from '@angular/core';
import { catchError,pipe,throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorHandlingService } from './services/errorhanding.service';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class LoginSerInterceptor implements HttpInterceptor {

  constructor(private handle:ErrorHandlingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    // let token:any=localStorage.getItem('token')
    // console.log(request)
    // let req=request.clone({
    //   headers:request.headers.set('auth',token)
    // })
    return next.handle(request).pipe(
          //   catchError((anyerr:HttpErrorResponse):Observable<any> =>{
          //     let errorMessage ="";
      
          //     if (anyerr.error instanceof ErrorEvent) {
          //       errorMessage = `Error: ${anyerr.error.message}`;
          //     console.error(errorMessage ? errorMessage : anyerr);
          //   } else if(anyerr.status===401) {
          //     console.log("enter the valid username or password")

          //   }
          //     else {
          //     console.log('This is server side error');
          //     errorMessage = `Error Code: ${anyerr.status},  Message: ${anyerr.message}`;
          //  }

          //   // return this.handle(errorMessage)
          //    return throwError(errorMessage)
          // })
          catchError((error: HttpErrorResponse) => {
            return this.handle.handleError(error);
          })
          )
         
  }
}







// import { Injectable } from '@angular/core';
// import { catchError,retry, throwError } from 'rxjs';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class LoggingInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // console.log(request)
//     // console.log(request.headers)
//     return next.handle(request).pipe(
//       catchError((anyerr:HttpErrorResponse):Observable<any> =>{
//         let errorMessage ="";

//         if (anyerr.error instanceof ErrorEvent) {
//           errorMessage = `Error: ${anyerr.error.message}`;
//         // } else if (anyerr instanceof HttpErrorResponse) {
//         //   errorMessage = `Error Status ${anyerr.status}: ${anyerr.error.error} - ${anyerr.error.message}`;
         
//         // } 

//         console.error(errorMessage ? errorMessage : anyerr);
//       }  
//       return throwError(errorMessage)
       
//     })
      
//     )
   
  








//   }
// }
// // .pipe(
// //   retry(1),
// //   catchError((returnedError:any) => {
// //     let errorMessage = null;

// //     if (returnedError.error instanceof ErrorEvent) {
// //       errorMessage = `Error: ${returnedError.error.message}`;
// //     } else if (returnedError instanceof HttpErrorResponse) {
// //       errorMessage = `Error Status ${returnedError.status}: ${returnedError.error.error} - ${returnedError.error.message}`;
// //       handled = this.handleServerSideError(returnedError);
// //     } 

// //     console.error(errorMessage ? errorMessage : returnedError);

// //     if (!handled) {
// //       if (errorMessage) {
// //         return throwError(errorMessage);
// //       } else {
// //         return throwError("Unexpected problem occurred");
// //       }
// //     } else {
// //       return of(returnedError);
// //     }
// //   })
// // )

