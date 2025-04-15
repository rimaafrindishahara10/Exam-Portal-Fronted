import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { title } from 'process';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-view-quizzes',
  standalone: true,
  imports: [MatCard,MatCardContent,MatCardActions,MatCardAvatar,MatCardHeader,MatCardSubtitle,MatCardTitle,MatButtonModule,CommonModule],
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})






export class ViewQuizzesComponent implements OnInit{
  
  quizzes : any =[];
  
//Navigate Add-Quiz->Page
navigateAddQuiz(){
  this.router.navigate(['/admin/addQuiz']);
}

  
  constructor(private quizService:QuizService,private router:Router){}


  ngOnInit(): void {
   
    //Get-All-Quizes->
    this.quizService.getAllQuizs().subscribe((res:any)=>{
           this.quizzes = res;
           console.log(this.quizzes);
    },(error:any)=>{
          Swal.fire('Error','!! Somthing is wrong,Server error !!','error');
          console.log(error);
    });

  }

  //Delete-Method
  deleteQuiz(qid: number) {
    Swal.fire({
      icon:"info",
      title:"Are you sure?",
      confirmButtonText:"Delete",
      showCancelButton:true
    }).then((result)=>
    {
      if(result.isConfirmed){
        //Deleting
        this.quizService.deleteQuiz(qid).subscribe({
          next: (data) => {
            console.log('Success Response:', data);
            this.quizzes= this.quizzes.filter((quiz:any)=> quiz.qid != qid);
            Swal.fire('Success', '!! Quiz Deleted Successfully !!', 'success');
          },
          error: (error) => {
            console.error('Delete Error:', error);
            Swal.fire('Error', '!! Quiz Deleting Error !!', 'error');
          }
        });
      }
    }
    );
    
  }
  


}
