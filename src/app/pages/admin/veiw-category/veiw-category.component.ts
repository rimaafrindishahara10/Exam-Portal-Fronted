import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiw-category',
  standalone: true,
  imports: [MatCard,MatCardHeader,
    MatIcon,MatDivider,
  CommonModule,MatCardContent,MatCardTitle,MatButtonModule],
  templateUrl: './veiw-category.component.html',
  styleUrl: './veiw-category.component.css'
})
export class VeiwCategoryComponent implements OnInit {

  
  
  categories : any = [];

  constructor(private categoryService:CategoryService,private router:Router){}


  navigateAddCategory(){
    this.router.navigate(['/admin/addCategory']);
  }


  ngOnInit(): void {
  

    //Get->All Categories
      this.categoryService.categories().subscribe((datas:any)=>{
             this.categories=datas;
             console.log(datas);
      },
      (err:any)=>{
         Swal.fire('Error!!','Error in loading data', 'error');
      }
    );
  }
  
  


}
function navigateAddCategory() {
  throw new Error('Function not implemented.');
}

