import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { alphaNumPattern, onlyAlphabets, onlyNumbers } from 'src/app/CustomValidationFunctions/myCustomValidatons';
import { emp } from 'src/app/model/empRec';
import { EmplService } from 'src/app/services/empl.service';
import { SelectService } from 'src/app/services/select.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit{


  public showEmp1:boolean=false;

  public employee:emp[]=[];
  public empSingle!:emp;


  public countries:Array<any> = [];
  public states: Array<any> = [];
  public frmDtInValidMsg:boolean=false;
  public toDtInValidMsg:boolean=false;

  public choosenId!:number;
  public show:boolean=false;
 

  public editEmpFm=new FormGroup(
    {
    
    empId:new FormControl('',[Validators.required]),       
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

  changeCountry(country: any) { 
    if(this.countries!=null&&this.countries!=undefined){
    this.states = this.countries.find((cntry: any) => cntry.name == country.target.value).states;}
  }

  constructor(private empServ:EmplService,private rot:Router, private activRou:ActivatedRoute,private selService:SelectService){}

  public ngOnInit() {
    this.selService.getCtryState();
   this.activRou.params.subscribe(i=>{this.choosenId=i['eid']})
   this.empServ.getEmps().subscribe(
      (res)=>{console.log("Inside Subscribe")
      console.log("back end res",res)
    if(res.length>0){
      res.forEach((e:any)=>{
        this.employee.push(
          {
        id:e.id,
        firstName:e.firstName,
        lastName:e.lastName,
        email:e.email,
        contactNumber:e.contactNumber,
        age:e.age,
        dob:e.dob,
        salary:e.salary,
        address:e.address,
        imageUrl:e.imageUrl
             })});
    }
    }
    );
    console.log("after subscribe method")

    // let seldEmp = this.employee.filter(p=>p.id==this.choosenId);
    // this.empSingle=seldEmp[0];
    // this.showEmp1=seldEmp.length>0?true:false;
    // console.log("selec emp "+seldEmp[0]);


    //  this.editEmpFm.patchValue({
   
    //    firstName:seldEmp[0].firstName,
    //    lastName:seldEmp[0].lastName,
    //    email:seldEmp[0].email,
    //    mobNum:seldEmp[0].contactNumber,
    //    address:seldEmp[0].address
    //    })
 
  }

  get f() { return this.editEmpFm.controls; }

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

getEmpDetails(empId:number){
 
  let seldEmp = this.employee.filter(p=>p.id==empId);
     this.empSingle=seldEmp[0];
      this.showEmp1=seldEmp.length>0?true:false;
      console.log("selec emp "+seldEmp[0]);
       this.editEmpFm.patchValue({  
        empId: empId.toString(), 
         firstName:seldEmp[0].firstName,
         lastName:seldEmp[0].lastName,
         email:seldEmp[0].email,
         mobNum:seldEmp[0].contactNumber,
         address:seldEmp[0].address
         })

         this.show=true;

}

updateEmp(){
  this.empServ.updateEmpDtl().subscribe({
    next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}

}
