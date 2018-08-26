import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AppError, UnAuthorizedError } from '../../../common/app-error';
import { BsModalService } from 'ngx-bootstrap';
import { AlertModalComponent } from '../../../partials/alert-modal/alert-modal.component';
import { BaseServiceResponse } from '../../../common/models';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidLogin = false;
  loader: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService, private modalService: BsModalService) { }

  signIn(credentials) {
    this.loader = this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/dashboard']);
        } else {
          this.invalidLogin = true;
        }
      }, (error: AppError) => {

        if (error instanceof UnAuthorizedError) {
          this.invalidLogin = true;
        } else {
          const response: BaseServiceResponse = new BaseServiceResponse();
          response.errors.push('Bilinmeyen Hata');
          this.modalService.show(AlertModalComponent, { initialState: { response: response }, class: 'modal-sm' });
        }
      });
  }
}
