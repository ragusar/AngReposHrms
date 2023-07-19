import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,catchError,map,throwError } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class EmployeeInterceptorInterceptor implements HttpInterceptor {

  constructor(private toastr:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Inside interceptor")

    let myheaders=new HttpHeaders();
  myheaders=myheaders.set('content-type','application/json');
  myheaders=myheaders.set('Accept-Language','en-US,en;q=0.5');
  myheaders=myheaders.set('Connection','keep-alive');
  myheaders=myheaders.set('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0');
  myheaders=myheaders.set('Accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8');

  request.clone({headers:myheaders});





    return next.handle(request).pipe(catchError(
      (error:HttpErrorResponse)=>{
         if(error.status==404){this.toastr.error("Resource Not Found")}
            else if(error.status==401){this.toastr.error("You are not authorized to this request")}
            else if(error.status==500){this.toastr.error("Internal server Error")}
           else if(error.status==504){this.toastr.error("Gateway Timeout")}
           else if(error.status==429){this.toastr.error("Server Busy. Please try after some time")}
           else(this.toastr.error("server response failed"))
           return throwError(()=>(error));

      })
    );
  
  }
}
