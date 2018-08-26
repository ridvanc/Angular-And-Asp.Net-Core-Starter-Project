import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginAuth implements CanActivate {

    constructor(protected router: Router, protected authService: AuthService) { }

    canActivate() {
        if (!this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/dashboard']);
        return false;
    }
}
