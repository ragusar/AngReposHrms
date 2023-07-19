import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { alphaNumPattern, onlyAlphabets, onlyNumbers } from 'src/app/CustomValidationFunctions/myCustomValidatons';
import { EmplService } from 'src/app/services/empl.service';
import {SelectService} from 'src/app/services/select.service';

@Component({
  selector: 'app-reg-emp-by-admin',
  templateUrl: './reg-emp-by-admin.component.html',
  styleUrls: ['./reg-emp-by-admin.component.css']
})
export class RegEmpByAdminComponent implements OnInit{

  public countries:Array<any> = [];
  public states: Array<any> = [];
  public frmDtInValidMsg:boolean=false;
  public toDtInValidMsg:boolean=false;

  changeCountry(country: any) { 
    if(this.countries!=null&&this.countries!=undefined){
    this.states = this.countries.find((cntry: any) => cntry.name == country.target.value).states;}
  }

  public regByAdminFm=new FormGroup(
    {
      empId:new FormControl('',[Validators.required,alphaNumPattern]),        //customvalidation function alphaNumPattern
    title:new FormControl(''),
    firstName:new FormControl('',[Validators.required,Validators.maxLength(15),onlyAlphabets]),
    middleName:new FormControl('',[Validators.maxLength(15),onlyAlphabets]),
    lastName:new FormControl('',[Validators.required,Validators.maxLength(15),onlyAlphabets]),
    email:new FormControl('',[Validators.required,Validators.email]),
    idType:new FormControl(''),
    idNum:new FormControl('',[Validators.required]),
    mobNum:new FormControl('',[Validators.required,onlyNumbers,Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormControl('',[Validators.required,Validators.maxLength(200)]),
    city:new FormControl('',[Validators.required,Validators.maxLength(15)]),
    state:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    nmOfOrg:new FormControl('',[Validators.required,Validators.maxLength(100)]),
    fromDt:new FormControl('',[Validators.required]),
    toDt:new FormControl('',[Validators.required]),
    desig:new FormControl('',[Validators.required]),
    skls:new FormControl('',[Validators.required]),
    curCtc:new FormControl('',[Validators.required,onlyNumbers]),
    totExp:new FormControl('',[Validators.required])

    }
  )
constructor(private empserv:EmplService,private selService:SelectService){}
  get f() { return this.regByAdminFm.controls; }

  ngOnInit(): void {
    this.countries=this.selService.getCtryState();
  }
  
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

registerEmp(){
  this.empserv.createEmpByAdmin().subscribe({next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete')})
}

}
