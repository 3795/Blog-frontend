/**
 * Create By Seven.wk
 * Description: 前台系统的网络服务
 * Create At 2018/10/4
 */
import {Injectable} from "@angular/core";
import {HttpService} from "../../service/http.service";

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
