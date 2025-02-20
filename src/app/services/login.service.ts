import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import baseUrl from './help';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private httpClint: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  //Method-> for currentUser loggedin
  public currentUser(){
    return this.httpClint.get(`${baseUrl}/currentUser`);
  }

  //Method->generate-token  
  public generateToken(loginData: any){
    return this.httpClint.post(`${baseUrl}/generate-token`,loginData);
  }

  //Method->Token Set in LocalStorate for login user
  public loginUser(token :any){
    //   localStorage.setItem('token',token)
    // return true;

    if (isPlatformBrowser(this.platformId)) { 
      localStorage.setItem('token', token);
      
    }
    return true;
  }

  //Method->user is Logged in 
  public isLoggedIn(){
    // let tokenStr = localStorage.getItem('token');
    // if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
    //   return false;
    // }
    // else{
    //   return true;
    // }

    if (isPlatformBrowser(this.platformId)) { 
      let tokenStr = localStorage.getItem('token');
      return !(tokenStr == undefined || tokenStr == '' || tokenStr == null);
    }
    return false;
  }

  //Method-> user is Logout
  public userLogout(){
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    // return true;

    if (isPlatformBrowser(this.platformId)) { 
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return true;
  }

  //Method-> For get token
  public getToken(){
    //  return localStorage.getItem('token');
    if (isPlatformBrowser(this.platformId)) { 
      return localStorage.getItem('token');
    }
    return null;
  }

  //Method->For set User in localstorage(bar bar backend server e call na korar jonno ai method)
  public setUser(user:any){
    // localStorage.setItem('user',JSON.stringify(user));

    if (isPlatformBrowser(this.platformId)) { 
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  //Method->User ke get kora jonno
  public getUser(){
    // let user= localStorage.getItem('user');
    // if(user!=null){
    //   return JSON.parse(user);
    // }
    // else{
    //   this.userLogout()
    //   return null;
    // }
    
    if (isPlatformBrowser(this.platformId)) { 
      let user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  //Method-> for get user role
  public getUserRole(){
     let user= this.getUser();
     return user.authorities[0].authority;
  }




}
