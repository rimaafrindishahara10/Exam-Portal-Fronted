import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient:HttpClient) { }

  //Load-All->Quizes
  public getAllQuizs(){
    return this.httpClient.get(`${baseUrl}/quiz/`);
  }

  //Add-Quiz->Method
  public addQuiz(quiz:any){
    return this.httpClient.post(`${baseUrl}/quiz/`,quiz);
  }


}
