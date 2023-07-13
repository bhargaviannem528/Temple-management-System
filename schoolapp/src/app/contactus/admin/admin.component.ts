import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit{
  
  
  
        
       constructor() { }
        Admin:FormGroup|any;
        ngOnInit(): void {
          this.Admin=new FormGroup({
          'fname':new FormControl(),
          'lname':new FormControl(),
          'email':new FormControl(),
          'phone number':new FormControl(),
          'class':new FormControl(),
          'section':new FormControl(),
          'address':new FormControl(),
        })
        }
        SignUpdata(signup:FormGroup){
          console.log(this.Admin.value);
        }

        url="./assets/img/admin.jpg";
      }