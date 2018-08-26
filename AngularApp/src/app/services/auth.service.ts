import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Defaults } from '../defaults';
import { handleError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;

  constructor(private http: Http) {
    const token = localStorage.getItem('token');
    if (token) {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(Defaults.apiUrl + 'token', JSON.stringify(credentials), options)
      .map(response => {
        const result = response.json();
        if (result && result.value) {
          localStorage.setItem('token', result.value);

          const jwt = new JwtHelper();
          this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
          return true;
        } else {
          return false;
        }
      }).catch(handleError);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
    return true;
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }
}
