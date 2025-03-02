import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule,MatCard,
    MatFormField,MatLabel,FormsModule,
    MatButton,MatCardContent,MatCardHeader,MatCardTitle,MatInputModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {

  category :any = {
    title:'',
    diescription:''

  };

  constructor(private categoryService:CategoryService, private snack:MatSnackBar,private router:Router){}

  

  ngOnInit(): void {}

  formSubmit(){
    if(this.category.title==null || this.category.title.trim()=='' ){
      this.snack.open('Title is required','',{
        duration:3000,
      });
      return;
    }
    //Call the service to add-category
    this.categoryService.addCategory(this.category).subscribe((res:any)=>{
       
      this.category.title='',
      this.category.diescription='',
      this.router.navigate(['admin/category'])
      Swal.fire('Success','!! Successfully Added !!','success');
      
      

    },
    (error:any)=>{
       Swal.fire('Error','!! Server Error !!','error')
    }
  )
  }
  

}
