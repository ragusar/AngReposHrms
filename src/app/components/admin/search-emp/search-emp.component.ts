import { Component, OnInit, ViewChild,ElementRef  } from '@angular/core';
import { EmplService } from 'src/app/services/empl.service';
import { emp } from 'src/app/model/empRec';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit{

  public searchVal:boolean=false;
  public showEmp1:boolean=false;

  public emp:emp[]=[];
  public empSingle!:emp;

  // onKey(event:any) {const inputValue = event.target.value;}

  @ViewChild('idIP') idIP !: ElementRef;

  constructor(private empServ:EmplService,private rot:Router, private activRou:ActivatedRoute,private toas:ToastrService){}

  ngOnInit(): void {
    
   
    this.empServ.getEmps().subscribe(
      (res)=>{console.log("Inside Subscribe")
    if(res.length>0){
      res.forEach((e:any)=>{this.emp.push({
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
    )  

  }


  
  getRecordOfSelectedEmp(){
   
this.searchVal=true;
console.log('selected emp: ',this.idIP.nativeElement.value);
let sltdEmpId = this.idIP.nativeElement.value;
console.log("selected empl id"+sltdEmpId)
let selEmp=this.emp.filter(e=>e.id==sltdEmpId);
console.log(selEmp);
this.empSingle=selEmp[0];
this.showEmp1=selEmp.length>0?true:false;


  }

  redirectToEditEmp(empid:number){this.rot.navigateByUrl('admin/editEmp/'+empid);}
  redirectToRegisEmp(){this.rot.navigateByUrl('admin/reigsEmpByadmin');}

  delete(empid:number){
    if(window.confirm("Are you sure to delete this employee with "+empid+ "?")){      
      this.empServ.deleteEmpl().subscribe({
        next: (v) => this.toas.success("Deleted Employee Successfully.Deleted Emp Id "+empid)
         
      })
    }

  }
  
}
