/**
 * Create By Seven.wk
 * Description: 为这些页面提供服务
 * Create At 2018/10/4
 */
import {Injectable} from "@angular/core";
import {GetService} from "../service/get.service";

@Injectable()
export class PagesService {

  constructor(private getService: GetService) {}

  /**
   * 获得文章卡片
   * @param {number} page
   * @returns {Observable<Object>}
   */
  public getArticleCards(page: number = 1) {
    return this.getService.get("article?page=" + page);
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
