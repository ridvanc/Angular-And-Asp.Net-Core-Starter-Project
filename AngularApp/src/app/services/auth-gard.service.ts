import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGard implements CanActivate {

    constructor(protected router: Router, protected authService: AuthService) { }

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
