import { Injectable } from '@angular/core';
import moment from 'moment';

// Assign the server auth API to AUT_API
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  setSessionStorage(responseObj: any) {

      // Adds the expiration time defined on the JWT to the current moment
      const expiresAt = moment().add(Number.parseInt(responseObj.expiresIn), 'days');

      sessionStorage.setItem('id_token', responseObj.token);
      sessionStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
      sessionStorage.removeItem("id_token");
      sessionStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration(), "second");
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = sessionStorage.getItem("expires_at");
      if (expiration) {
          const expiresAt = JSON.parse(expiration);
          return moment(expiresAt);
      } else {
          return moment();
      }
  }
}
