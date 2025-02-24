import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full',
        
    },

    {
        path:'signup',
        component:SignupComponent,
        pathMatch:'full',
        
    },
    {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    },
    {
        path:'admin',
        component:AdminDashboardComponent,
        pathMatch:'full',
        canActivate:[adminGuard],
    },
    {
        path:'userDash',
        component:UserDashboardComponent,
        pathMatch:'full',
        canActivate:[userGuard],

    }
];
