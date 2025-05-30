import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';

import { ProfileComponent } from './pages/profile/profile.component';
import path from 'path';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { VeiwCategoryComponent } from './pages/admin/veiw-category/veiw-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';

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
        canActivate:[adminGuard],
        children:[
            {
                path:'',
                component:WelcomeComponent,
            },
            {
                path:'profile',
                component:ProfileComponent,
            },
            {
                path:'category',
                component:VeiwCategoryComponent

            },
            {
                path:'addCategory',
                component:AddCategoryComponent
            },
            {
                path:'quizes',
                component:ViewQuizzesComponent
            },
            {
                path:'addQuiz',
                component:AddQuizComponent
            },
            {
                path:'quiz/:qid',
                component:UpdateQuizComponent
            }

        ],

      
        

    },
    {
        path:'userDash',
        component:UserDashboardComponent,
        pathMatch:'full',
        canActivate:[userGuard],

    }
];
