import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public lgnFm = new FormGroup(
    {
      lgnm:new FormControl('',[Validators.required,Validators.email]), //giving email validator as the loginname should be the mail id
      pwd:new FormControl('',[Validators.required,Validators.minLength(10)])
    }
  )
 


  get f() { return this.lgnFm.controls; }
constructor(private rou:Router){}

login(){
  let enteredUserName:string|null;
    enteredUserName= this.lgnFm.controls['lgnm'].value;
    if(enteredUserName!="" &&  enteredUserName!=null){
    if(enteredUserName!='admin@sample.com'){
      localStorage.setItem('userType','employee');
      localStorage.setItem('userName',enteredUserName);
      sessionStorage.setItem('userName',enteredUserName);   
      }
      else if(enteredUserName!=null){
        localStorage.setItem('userType','admin');
        localStorage.setItem('userName',enteredUserName);
          sessionStorage.setItem('userName',enteredUserName);
        }
    }
    let type=localStorage.getItem("userType");
    if(type=="admin"){this.rou.navigateByUrl('admin')}
  else this.rou.navigateByUrl('viewEmpProfile');
}


}
