import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgBusyModule } from 'angular-busy2/dist/cgBusy.module';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { ModalModule, ButtonsModule, AlertModule, CollapseModule } from 'ngx-bootstrap';
import { AlertModalComponent } from '../partials/alert-modal/alert-modal.component';
import { LaddaModule } from 'angular2-ladda';



@NgModule({
  imports: [
    CommonModule,
    CgBusyModule,
    FormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    LaddaModule.forRoot({
      style: 'contract',
      spinnerSize: 20,
      spinnerColor: 'blue'
    })
  ],
  declarations: [
    AlertModalComponent
  ],
  exports: [
    CommonModule,
    CgBusyModule,
    LaddaModule,
    FormsModule,
    CollapseModule
  ],
  entryComponents: [
    AlertModalComponent
  ]
})
export class SharedModule { }
