import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginAuth } from '../../services/auths/LoginAuth';
import { NoAccessComponent } from './no-access/no-access.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        },
        canActivate: [LoginAuth]
      },
      {
        path: 'noaccess',
        component: NoAccessComponent,
        data: {
          title: 'No Access'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
