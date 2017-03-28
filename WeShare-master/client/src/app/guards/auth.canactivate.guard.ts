import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthCanActivateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    /*  if (route.params['id']) {
        if (this.dbService.getStudent(route.params['id'])) {
          return true;
        }
      }*/
    //return confirm("Are loging in?");
    if (this.authService.isAuth()) {
      this.router.navigateByUrl('home');
    }
    else {
      this.router.navigateByUrl('login');
    }
    return false;
  }
}