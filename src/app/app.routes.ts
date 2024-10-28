import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [

    {
        path:'',
        component:SignupComponent,
        pathMatch:'full',
    },
];
