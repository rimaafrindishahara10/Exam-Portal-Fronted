import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { title } from 'process';

@Component({
  selector: 'app-view-quizzes',
  standalone: true,
  imports: [MatCard,MatCardContent,MatCardActions,MatCardAvatar,MatCardHeader,MatCardSubtitle,MatCardTitle,MatButtonModule,CommonModule],
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})






export class ViewQuizzesComponent {

  quizzes =[
    {
    qId:10,
    title:"Java Basic",
    description:"Java is a programming language that is class-based and object-oriented. It is designed to be general-purpose and aims to have fewer implementation dependencies, and serves as a computing platform for application development.",
    maxMarks:"50",
    numOfQuestions:"20",
    active:" ",
    category:
           {
            title:"Programming Language"
          }
    

  },
  {
    qId:11,
    title:"Java Basic",
    description:"Java is a programming language that is class-based and object-oriented. It is designed to be general-purpose and aims to have fewer implementation dependencies, and serves as a computing platform for application development.",
    maxMarks:"50",
    numOfQuestions:"20",
    active:" ",
    category:
           {
            title:"Programming Language"
          }
    

  }
  ]


}
