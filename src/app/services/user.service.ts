import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://nodejs01-app.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private htttp: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.htttp.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.htttp.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.htttp.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.htttp.get(API_URL + 'admin', { responseType: 'text' });
  }
}
