import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatCard, MatCardActions, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ViewQuizzesComponent } from '../view-quizzes/view-quizzes.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCard,MatListModule,MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router,private loginservice:LoginService,private cDR:ChangeDetectorRef){}
  

  navigateHome(){
    this.router.navigate(['/admin']);
  }
  navigateProfile(){
    this.router.navigate(['/admin/profile']);
  }
  navigateQuizes(){
    this.router.navigate(['/admin/quizes']);
  }
  //Navigate Add-Quiz->Page
    navigateAddQuiz(){
      this.router.navigate(['/admin/addQuiz']);
    }
  
  

  navigateCategory() {
    this.router.navigate(['/admin/category'])
  }
  navigateAddCategory() {
    this.router.navigate(['/admin/addCategory'])
    }
    public logout(){
      this.cDR.detectChanges();
      this.loginservice.userLogout();

      window.location.reload();
      this.router.navigate(['login']);
 
   }
  
}
