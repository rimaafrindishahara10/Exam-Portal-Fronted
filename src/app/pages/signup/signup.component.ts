import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule,MatLabel,MatInputModule,MatButtonModule,FormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar){}

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
        this.snack.open("UserName is required!!", '',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'

       });
       return;
    }
   
   //Add-User-Call-ServiceClass
     this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('!! Successfully Done !!','User id is ' + data.id, 'success');
      },
      (error)=>{
        console.log(error);
       this.snack.open("Something went wrong!!", '',{
        duration:300,
       })
      }
     )
    
  }



}
