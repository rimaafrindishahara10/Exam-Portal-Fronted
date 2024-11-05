import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule,MatLabel,MatInputModule,MatButtonModule,FormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService){}

  public user ={
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  }
  

  ngOnInit(): void {
    
  }

  formSubmit(){
    if(this.user.userName== ''|| this.user.userName==null){
      alert("User Name must be filled ")
    }
    else{
      console.log(this.user);
    }

    //Add-User-Call-ServiceClass
     this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        alert("Form Submitted Successfully!!!");
      },
      (error)=>{
        console.log(error);
        alert("Something went wrong!!!!!");
      }
     )
    
  }



}
