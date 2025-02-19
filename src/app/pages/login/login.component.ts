import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule, MatLabel,MatButtonModule,MatCard,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private snack:MatSnackBar,private loginservice: LoginService){}

  loginData = {
    userName : "",
    password : "",
  }

  formData(){
    console.log("Login Button is click");

    if(this.loginData.userName.trim()=='' || this.loginData.userName==null){
        this.snack.open('UseName is required !! ', '',{
          duration:3000,
        });
        return;
    }
    
    if(this.loginData.password.trim()=='' || this.loginData.password ==null){
      this.snack.open('Password is required !! ', '',{
        duration:3000,
      });
      return;
  }

  //GenerateToken -> Call The Service Class
  this.loginservice.generaToken(this.loginData).subscribe(
    (data:any)=>{
      console.log("!! Success !!");
      console.log(data);

      //Login Korabo
      this.loginservice.loginUser(data.token);
      this.loginservice.currentUser().subscribe(
        (user:any)=>{
          this.loginservice.setUser(user);
          console.log(user);
          //Redirect: AdminUser-Dashboard
          //Redirect: NormalUser-Dashboard
        }
      )
    },
    (error)=>{
      console.log(error);
           this.snack.open('!! Something is wrong !!','',{
            duration: 3000,
           });
    }
  )
    
  }

}
