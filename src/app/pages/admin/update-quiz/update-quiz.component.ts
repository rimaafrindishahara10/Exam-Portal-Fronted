import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { CategoryService } from '../../../services/category.service';
import { error, log } from 'console';
import { MatCard } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-quiz',
  standalone: true,
  imports: [MatCard,MatInputModule,FormsModule,MatSlideToggleModule,MatSelectModule,MatFormFieldModule,CommonModule,FormsModule,MatButtonModule,MatSelect,MatOption,],
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit{

  constructor(private _route:ActivatedRoute,private quizService:QuizService,private _cat:CategoryService,private router: Router){}

  qId=0;
  quiz:any;
  categories:any;


  ngOnInit(): void {
   
    //Load The quiz
    this._route.params.subscribe((params)=>{
      this.qId = params['qid'];
    });
    this.quizService.getQuiz(this.qId).subscribe((data:any)=>{
      this.quiz = data;
      console.log(this.quiz);
    },(error)=>{
      console.log(error);
    })

    this._cat.categories().subscribe((data:any)=>{
         this.categories=data;
    },(error)=>{
       console.log(error);
    })
  }

  public updateData(){
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Success','Successfully Updated','success').then((e)=>{
          this.router.navigate(['/admin/quizes']);
        });
      },
      (error)=>{
        Swal.fire('Error','Error something wrong','error');
      }
    )
  }

}
