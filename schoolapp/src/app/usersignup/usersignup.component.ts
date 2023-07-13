import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  formData:any;
  constructor(private fs:FormserService){}
  ngOnInit():void{
    this.formData=new FormGroup({
      fname:new FormControl('',[Validators.required]),
      lname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      Locality:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      Zip:new FormControl('',[Validators.required]),
      ip:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      repassword:new FormControl('',[Validators.required]),


    })
  }
  action(data:any){
    console.log(data);
    this.fs.reg(data).subscribe((res)=>{
      if(res.submit==true){
        alert("registered successfully")
      }
      else{
        alert("Not regsitered")
      }
    })
   
 }

}