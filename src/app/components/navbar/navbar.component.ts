import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon,MatToolbar, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedIn = false;
  user: { username: string } | null = null;

  constructor(public loginservice:LoginService,private router: Router,private cDR:ChangeDetectorRef){}
  ngOnInit(): void {
     
     this.isLoggedIn =this.loginservice.isLoggedIn();
     this.user = this.loginservice.getUser();
     this.loginservice.loginStatusSubject.asObservable().subscribe(data=>{
    this.isLoggedIn =this.loginservice.isLoggedIn();
    this.user = this.loginservice.getUser();
     });
  }

  public logout(){
    this.cDR.detectChanges();
     this.loginservice.userLogout();

     window.location.reload();
     this.router.navigate(['login']);

  }
}
