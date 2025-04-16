import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help';
import { Observable } from 'rxjs';

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
  //Delete-Quiz->
  public deleteQuiz(qid:number):Observable<any>{
    return this.httpClient.delete(`${baseUrl}/quiz/${qid}`,{ observe: 'response' });
  }

  //GetOne-Quiz-Method->
  public getQuiz(qid:number){
    return this.httpClient.get(`${baseUrl}/quiz/${qid}`);
  }

  //Update-Quiz-Method->
  public updateQuiz(quiz:any){
    return this.httpClient.put(`${baseUrl}/quiz/`,quiz);
  }

}
