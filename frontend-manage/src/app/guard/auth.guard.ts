import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpService} from "../services/http.service";
import {NzMessageService} from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private httpService: HttpService,
              private message: NzMessageService,
              private router: Router) {}

  /**
   * 验证路由
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | Promise<boolean> | boolean}
   */
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth();
  }

  /**
   * 验证子路由
   * @param {ActivatedRouteSnapshot} childRoute
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | Promise<boolean> | boolean}
   */
  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth();

  }

  /**
   * 验证是否登录
   * @returns {boolean}
   */
  auth(): boolean {
    this.httpService.get("/user/isLogin")
      .subscribe((data) => {
          if (!(data.code%2)) {
            this.router.navigateByUrl("/login");
          }
        }
      );
    return true;
  }

}
