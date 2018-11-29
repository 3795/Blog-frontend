/**
 * Create By Seven.wk
 * Description: 前台系统的网络服务
 * Create At 2018/10/4
 */
import {Injectable} from "@angular/core";
import {HttpService} from "../../service/http.service";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class FrontendService {

  constructor(private httpService: HttpService) {}

  /**
   * get方法
   * @param {string} url
   * @returns {Observable<Object>}
   */
  public get(url: string) {
    return this.httpService.get(url);
  }

  public getWithParams(url: string, params: HttpParams): Observable<any> {
    return this.httpService.getWithParams(url, params);
  }

}


export class ArticleCard {
  public id: number;
  public title: string;
  public img: string;
  public summary: string;
  public categoryName: string;
  public createTime: string;

  constructor() {}
}

export class Category {
  public id: number;
  public name: string;
}
