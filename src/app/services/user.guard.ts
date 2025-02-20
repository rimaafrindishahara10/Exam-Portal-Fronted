import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const userGuard: CanActivateFn = (route, state) => {

  const loginservice = inject(LoginService);
  const router = inject(Router);
  if(loginservice.isLoggedIn() && loginservice.getUserRole()== 'NORMAL'){
    return true;
  }
    router.navigate(['login']);


  return false;
};
