import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EditEmpComponent } from './components/admin/edit-emp/edit-emp.component';
import { EmpProfileComponent } from './components/emp-profile/emp-profile.component';
import { SearchEmpComponent } from './components/admin/search-emp/search-emp.component';
import { HomeComponent } from './components/home/home.component';

import { PNF404Component } from './components/pnf404/pnf404.component';
import { AboutPgComponent } from './components/about-pg/about-pg.component';
import { CompanyServicesPgComponent } from './components/company-services-pg/company-services-pg.component';
import { RegEmpByAdminComponent } from './components/admin/reg-emp-by-admin/reg-emp-by-admin.component';
import { adminaccessGuard } from './guard/adminaccess.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'viewEmpProfile',component:EmpProfileComponent},
  {path:'admin',canActivate:[adminaccessGuard],component:SearchEmpComponent},
  {path:'admin/:eid',canActivate:[adminaccessGuard],component:SearchEmpComponent}, 
  {path:'admin/editEmp/:eid',canActivate:[adminaccessGuard],component:EditEmpComponent},
  {path:'reigsEmpByadmin',component:RegEmpByAdminComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutPgComponent},
  {path:'cmpservice',component:CompanyServicesPgComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PNF404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
