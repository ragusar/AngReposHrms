import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EmpProfileComponent } from './components/emp-profile/emp-profile.component';
import { SearchEmpComponent } from './components/admin/search-emp/search-emp.component';
import { EditEmpComponent } from './components/admin/edit-emp/edit-emp.component';
import { AboutPgComponent } from './components/about-pg/about-pg.component';
import { CompanyServicesPgComponent } from './components/company-services-pg/company-services-pg.component';
import { PNF404Component } from './components/pnf404/pnf404.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmplService } from './services/empl.service';
import { HttpClientModule,HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { RegEmpByAdminComponent } from './components/admin/reg-emp-by-admin/reg-emp-by-admin.component';
import { EmployeeInterceptorInterceptor } from './interceptors/employee-interceptor.interceptor';

@NgModule({
  
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EmpProfileComponent,
    SearchEmpComponent,
    EditEmpComponent,
    AboutPgComponent,
    CompanyServicesPgComponent,
    PNF404Component,
    HeaderComponent,
    RegEmpByAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot()  
  ],
  
  providers: [
    EmplService,
    {provide:HTTP_INTERCEPTORS,
    useClass:EmployeeInterceptorInterceptor,
  multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
