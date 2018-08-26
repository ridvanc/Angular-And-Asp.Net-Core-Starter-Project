import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { NoAccessComponent } from './no-access/no-access.component';
import { CgBusyModule } from 'angular-busy2';

@NgModule({
  imports: [
    CgBusyModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  declarations: [LoginComponent, NoAccessComponent]
})
export class PagesModule { }
