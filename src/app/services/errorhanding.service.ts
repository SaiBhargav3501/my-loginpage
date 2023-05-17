import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    }
    else if(error.status===401) {
    //  console.log("enter the valid username or password") 
     errorMessage="enter valid id or password"
     
    }else{
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    // Pass the error message to the component
    return throwError(errorMessage);
  }
}