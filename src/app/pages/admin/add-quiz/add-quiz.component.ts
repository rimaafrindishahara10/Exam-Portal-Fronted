import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  standalone: true,
  imports: [MatCard,MatInputModule,FormsModule,MatSlideToggleModule,MatSelectModule,MatFormFieldModule,CommonModule,FormsModule,MatButtonModule,MatSelect,MatOption],
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit{

categories :any =[];

quizData : any = {
  title:'',
  description:'',
  maxMarks:'',
  numOfQuestions:'',
  active:true,
  category:{cId:null}
};


constructor(private cDR:ChangeDetectorRef,private router:Router,private quizService:QuizService,private categoryService:CategoryService,private snack:MatSnackBar){}


  ngOnInit(): void {
    //For->Trigger change detection
    this.cDR.detectChanges();

    //LoadAll->Categories
    this.categoryService.categories().subscribe((res:any)=>{
      this.categories=res;
      this.cDR.detectChanges();
      
    },
    (error)=>{
      Swal.fire('Error', '!!Could not load categories!!','error');
      console.log(error);
    }
  );

  }

  //Add-Quiz->Method
  quizSubmit(){
    if(this.quizData.title.trim()==''|| this.quizData.title==null){
      this.snack.open('!! Title is required !!','',{
        duration:3000,
      });
      return;
    }
    //Call the server
    this.quizService.addQuiz(this.quizData).subscribe((res:any)=>{
        Swal.fire('Success','!! Quiz has been added successfully !!','success');
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numOfQuestions:'',
          active:true,
          category:{cId:null}
        }
        console.log(res);
       
    },
  (error)=>{
        console.log(error);
        Swal.fire('Error','!! Somthing wrongquiz has not added in database !!','error');
        
        
  });
    
  }
  

}
