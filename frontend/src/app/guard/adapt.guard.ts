import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdaptGuard implements CanActivate, CanActivateChild {

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkScreenSize();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkScreenSize();
  }

  checkScreenSize(): boolean {
    if (document.body.clientWidth < 801) {
      location.href = "http://mobile.ntshare.cn";
    }
    return true;
  }

}
