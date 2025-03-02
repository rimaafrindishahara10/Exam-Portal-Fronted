import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  //Load-All Categories
  public categories() {
    return  this.httpClient.get(`${baseUrl}/category/`);
  }
 
  //Add-Category
  public addCategory(category:any){
    return this.httpClient.post(`${baseUrl}/category/`,category);
  }

}
