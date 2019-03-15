import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { Defaults } from '../defaults';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  constructor(private http: HttpClient) {
  }

  getValues(count: number) {
    return this.http.get(`${Defaults.apiUrl}api/values/${count}`);
  }

}
