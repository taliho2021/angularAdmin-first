import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Assign the server auth API to AUT_API
const AUTH_API = 'http:localhost:3000/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'applicaiton/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login (username: string, password: string) : Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions)
  }

  register(username: string, emai:string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      password
    }, httpOptions)
  }
}
