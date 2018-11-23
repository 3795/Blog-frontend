import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {BackendService} from "../service/backend.service";
import {NzMessageService} from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private backendService: BackendService,
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
    this.backendService.get("/category/2")
      .subscribe((data) => {
          if (!(data.code%2)) {
            this.router.navigateByUrl("/manage/login");
          }
        }
      );
    return true;
  }
}
