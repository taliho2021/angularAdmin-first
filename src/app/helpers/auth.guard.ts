import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private token: TokenStorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.token.getUser();
      if (currentUser) {
        // logged in. So return true
        return true;
      } else {
        this.router.navigate(['account/auth/login'], { queryParams: {returnUrl: state.url}});
        return false;
      }

      // not logged in. So redirect to login page with the return url
  }

}
