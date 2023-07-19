import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alphaNumPattern, onlyAlphabets, onlyNumbers } from 'src/app/CustomValidationFunctions/myCustomValidatons';
import { SelectService } from 'src/app/services/select.service';


@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent {

  public loggedUser:string|null=localStorage.getItem("userName");
  public frmDtInValidMsg:boolean=false;
  public toDtInValidMsg:boolean=false;
 

   
  
	// Countries: Array<any> = [
  //   { name: 'India', states: ['TamilNadu','Kerala','Karnataka','Telungana'] },
	// 	{ name: 'Germany', states: ['Wiesbaden', 'Mecklenburg-Vorpommern', 'Niedersachsen'] },
	// 	{ name: 'Spain', states: ['Andalusia','Aragon'] },
	// 	{ name: 'USA', states: ['Alabama','Alaska','Arizona'] },
	// 	{ name: 'Mexico', states: ['Puebla'] }
		
	// ];


 public countries:Array<any> = [];
  public states: Array<any> = [];
 



 // alphaNumPattern = "^[a-zA-z0-9]$";    //commenting as it is handled from customvalidation function

  public empProfileFm=new FormGroup(
    {
    // empId:new FormControl('',[Validators.required,Validators.pattern(this.alphaNumPattern)]), 
    empId:new FormControl('1006',[Validators.required,alphaNumPattern]),        //customvalidation function alphaNumPattern
    title:new FormControl('Mr.'),
    firstName:new FormControl('Angie',[Validators.required,Validators.maxLength(15),onlyAlphabets]),//customvalidation function onlyAlphabets
    middleName:new FormControl('',[Validators.maxLength(15),onlyAlphabets]),
    lastName:new FormControl('Bode',[Validators.required,Validators.maxLength(15),onlyAlphabets]),
    email:new FormControl('Angie.Bode@dummyapis.com',[Validators.required,Validators.email]),
    idType:new FormControl('Voter Id'),
    idNum:new FormControl('56A46896B63SV',[Validators.required]),
    mobNum:new FormControl('123456890',
          [Validators.required,onlyNumbers,Validators.minLength(10),Validators.maxLength(10)]),//customvalidation function onlynumber
    address:new FormControl('Address1',[Validators.required,Validators.maxLength(200)]),
    city:new FormControl('Chennai',[Validators.required,Validators.maxLength(15)]),
    state:new FormControl('Tamilnadu',[Validators.required]),
    country:new FormControl('India',[Validators.required]),
    nmOfOrg:new FormControl('CSZ',[Validators.required,Validators.maxLength(100)]),
    fromDt:new FormControl('01/06/2005',[Validators.required]),
    toDt:new FormControl('12/05/2023',[Validators.required]),
    desig:new FormControl('Manager',[Validators.required]),
    skls:new FormControl('Java',[Validators.required]),
    curCtc:new FormControl('12l',[Validators.required,onlyNumbers]),
    totExp:new FormControl('18',[Validators.required])
   }
  )


  constructor(private selService:SelectService){}

   ngOnInit(): void {
     this.countries=this.selService.getCtryState();
   
     
    
 }

 get f() { return this.empProfileFm.controls; }
  
  changeCountry(country: any) { 
    if(this.countries!=null&&this.countries!=undefined){
    this.states = this.countries.find((cntry: any) => cntry.name == country.target.value).states;}
  }

//  getToday(){
//   //let date=new Date().toLocaleDateString();
//   let date=new Date().toJSON().slice(0, 10);
//   console.log("date format"+date)
//  }

 @ViewChild ('fmDt') fromDt !: ElementRef;
 @ViewChild('toDt') toDate !: ElementRef;

 validFrmDt(){
  let selFmDate = this.fromDt.nativeElement.value;
  let selDt:Date = new Date (selFmDate);
  let curDate=new Date();
  console.log('selected from date '+selDt);
  console.log('today date '+curDate);
  if(selDt.getTime()>curDate.getTime()){
    this.frmDtInValidMsg=true;
    console.log("selected date is after current date");
  }
  else{this.frmDtInValidMsg=false;
    console.log("selected date is valid")}
}

validToDt(){
  let selFrmDt=this.fromDt.nativeElement.value;
  let selToDt=this.toDate.nativeElement.value;
  let frmDate=new Date(selFrmDt);
  let toDate=new Date(selToDt);
  if(toDate.getTime()<frmDate.getTime()){
    this.toDtInValidMsg=true;
    console.log("to date should not be greater than from date");}
    else{this.toDtInValidMsg=false;
      console.log("valid to date")
    }
}

}
