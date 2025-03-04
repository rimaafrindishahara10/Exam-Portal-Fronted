import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  categoryId : any;
  
  

  constructor(private categoryService:CategoryService,private router:Router,private snack:MatSnackBar){}


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

   // Delete-Category
   public deleteCategory(c: any) {
    console.log(c.cid);
    console.log(c.title);
    this.categoryId = c.cid;

    this.categoryService.deleteCategory(this.categoryId).subscribe(
        (res: any) => {
           
            if (res && res.message) {
               
                this.categories = this.categories.filter((category: any) => category.cid !== c.cid);
                Swal.fire('Successful', res.message, 'success');
                console.log('Deleted', res);
            } else {
                Swal.fire('Error', 'Failed to delete category!', 'error');
            }
        },
        (err: any) => {
            console.error('Error deleting category:', err);
            Swal.fire('Error', 'Something went wrong!', 'error');
        }
    );
}


}
  
  





