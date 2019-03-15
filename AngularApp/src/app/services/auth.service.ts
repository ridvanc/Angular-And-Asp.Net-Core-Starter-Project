import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { catchError, retry } from 'rxjs/operators';
import { Defaults } from '../defaults';
import { handleError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token !== null && token !== '') {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials: any) {
    return this.http.post(Defaults.apiUrl + 'token', JSON.stringify(credentials))
      .pipe(
        catchError(handleError)
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
    return true;
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== null && token !== '') {
      return tokenNotExpired('token');
    }
    return false;
  }
}
