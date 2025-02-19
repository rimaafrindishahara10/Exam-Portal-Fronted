import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClint: HttpClient) { }

  //Method-> for currentUser loggedin
  public currentUser(){
    return this.httpClint.get(`${baseUrl}/currentUser`);
  }

  //Method->generate-token 
  public generaToken(loginData: any){
    return this.httpClint.post(`${baseUrl}/generate-token`,loginData);
  }

  //Method->Token Set in LocalStorate for login user
  public loginUser(token :any){
    localStorage.setItem('token',token)
    return true;
  }

  //Method->user is Logged in 
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  //Method-> user is Logout
  public userLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Method-> For get token
  public getToken(){
     return localStorage.getItem('token');
  }

  //Method->For set User in localstorage(bar bar backend server e call na korar jonno ai method)
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //Method->User ke get kora jonno
  public getUser(){
    let user= localStorage.getItem('user');
    if(user!=null){
      return JSON.parse('user');
    }
    else{
      this.userLogout()
      return null;
    }

  }

  //Method-> for get user role
  public getUserRole(){
     let user= this.getUser();
     return user.authorities[0].authority;
  }


}
