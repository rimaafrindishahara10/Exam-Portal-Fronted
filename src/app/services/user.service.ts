import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClint: HttpClient) { }

  //Add-User
  public addUser(user: any){
    return this.httpClint.post(`${baseUrl}/user/`, user);
  }
}
