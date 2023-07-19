import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { onlyAlphabets} from 'src/app/CustomValidationFunctions/myCustomValidatons';
import { EmplService } from 'src/app/services/empl.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

 
constructor(private rout:Router, private empServ:EmplService){}

public rgnFm = new FormGroup(
  {
    firstName:new FormControl('',[Validators.required,onlyAlphabets]),
    lastName:new FormControl('',[Validators.required,onlyAlphabets]),
    emailid:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),Validators.minLength(10)]) 
  }
)

get f() { return this.rgnFm.controls; }


registerEmp(){

this.empServ.createEmp().subscribe({
  next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete')
})

}

}
