import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public navItems:string[]=['Home','About','Company Services'];
  public usrFlag:boolean=false;

  public loggedUser:string|null=localStorage.getItem("userName");
  public loggedUserType:string|null=localStorage.getItem("userType");
  getuser(){
    console.log("USer "+this.loggedUser)
  }

  constructor(private route:Router){}

  public clearUser(){
    sessionStorage.clear();
    localStorage.removeItem("userName");
    localStorage.clear();
    this.usrFlag=true;
     this.route.navigateByUrl("/login");
  }

}
