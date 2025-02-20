import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCard,MatListModule,MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router){}

  navigateHome(){
    this.router.navigate(['/admin']);
  }
  navigateProfile(){
    this.router.navigate(['/admin/profile']);
  }

}
