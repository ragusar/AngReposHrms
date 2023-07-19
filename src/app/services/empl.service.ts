import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { emp } from '../model/empRec';

@Injectable({
  providedIn: 'root'
})
export class EmplService {

 
  public employees:emp[]=[]

  dummyApiUrl:string="https://dummy.restapiexample.com/api/v1/";
  dummyURL2:string='https://hub.dummyapis.com/';

  constructor(private httpclient:HttpClient) { }


  //register employee-POST Req
  createEmp(){

    let newEmp={
      name:"test",
      salary:"123",
      age:"23"
    }

    return this.httpclient.post(this.dummyApiUrl+'create',JSON.stringify(newEmp));
  }

  
  //get Employee Records-GET REq
  getEmps():Observable<any>{
    return this.httpclient.get(this.dummyURL2+'employee');
  }


  createEmpByAdmin(){

    let newEmp={
      name:"test",
      salary:"123",
      age:"23"
    }

    return this.httpclient.post(this.dummyApiUrl+'create',JSON.stringify(newEmp));
  }
  
  //update emp details by admin
  updateEmpDtl(){

    let newDtl= 	{"name":"test","salary":"123","age":"23"}
    return this.httpclient.put(this.dummyApiUrl+'update/21',JSON.stringify(newDtl));
  }
//delete emp by admin
deleteEmpl(){
  let empid=1001;
  return this.httpclient.delete(this.dummyApiUrl+'delete/2');
}



}
