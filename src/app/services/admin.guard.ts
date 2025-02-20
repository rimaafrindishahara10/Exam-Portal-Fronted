import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const loginservice = inject(LoginService);
  const router = inject(Router);
  if(loginservice.isLoggedIn() &&loginservice.getUserRole()=='ADMIN'){
    return true;
  }
  router.navigate(['login']);
  return false;
};


