import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from '@angular/router';


import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { Route, Routes } from '@angular/router';
import { single } from 'rxjs';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AbouttempleComponent } from './festival/abouttemple/abouttemple.component';


import { LoginComponent } from './login/login.component';

import { TempleprofileComponent } from './templeprofile/templeprofile.component';
import { WorshipgodComponent } from './worshipgod/worshipgod.component';
import { IncometypeComponent } from './incometype/incometype.component';
import { ExpensetypeComponent } from './expensetype/expensetype.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
;
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ContactusComponent } from './contactus/contactus.component';

import { FestivalComponent } from './festival/festival.component';

import { PoojaComponent } from './pooja/pooja.component';

import { FooterComponent } from './footer/footer.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavComponent } from './nav/nav.component';
import { Home2Component } from './home2/home2.component';
import { Nav2Component } from './nav2/nav2.component';
import { Home3Component } from './home3/home3.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { DonateComponent } from './donate/donate.component';
import { SevaComponent } from './seva/seva.component';





@NgModule({
  declarations: [
    AppComponent,
   AbouttempleComponent,
  

    LoginComponent,
   
    ContactusComponent,
   


    
  
  
    HeaderComponent,
    
    TempleprofileComponent,
    WorshipgodComponent,
    IncometypeComponent,
    ExpensetypeComponent,
    EmployeedetailsComponent,

    UserdetailsComponent,
    
     FestivalComponent,
         
          PoojaComponent,
       
          FooterComponent,
          UsersignupComponent,
          AdminloginComponent,
          NavComponent,
          HeaderComponent,
          HomeComponent,
          Home2Component,
          Nav2Component,
          Home3Component,
          IncomeComponent,
          ExpenseComponent,
          DonateComponent,
          SevaComponent
    


    
  ],  
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   MatToolbarModule,
   BrowserAnimationsModule,
   MatIconModule,
   AppRoutingModule,
   FormsModule,
  
 
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
