import { Component, OnInit } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,MatCard,MatCardContent,MatCardActions,MatCardModule,MatButtonModule,MatButton],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
 constructor(private loginservice: LoginService){}

  user :any = null;

  ngOnInit(): void {
    //Calling data from localStorage
    this.user=this.loginservice.getUser();

    //Calling data from server
    // this.loginservice.currentUser().subscribe(
    //   (user:any)=>{
    //      this.user=user;
    // },(error)=>{
    //    console.log(error);
    // }
  
  // )

  
  }



}
