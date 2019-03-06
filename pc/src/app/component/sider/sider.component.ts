import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/HttpService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  public username: string;
  public avatar: string;

  public navigations: any[] = [];

  public articleCount: number = 0;
  public categoryCount: number = 0;

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.getInfo();
    this.initNavigation();
    this.getCount();
  }

  /**
   * 获得用户信息
   */
  getInfo(): void {
    this.httpService.get("/user")
      .subscribe((data) => {
        this.username = data.data['username'];
        this.avatar = data.data['avatar'];
      });
  }

  /**
   * 初始化导航数据
   */
  initNavigation(): void {
    this.httpService.get("/navigation")
      .subscribe( (data) => {
        this.navigations = data.data;
      });
  }

  /**
   * 切换导航
   * @param {string} url
   */
  public changeCategory(url: string) {
    this.router.navigateByUrl("/transitionPage")
      .then(() => {
        this.router.navigate([url]);
      });
  }

  /**
   * 获取数量
   */
  public getCount(): void {
    // 获取文章的总数量
    this.httpService.get("/article/count")
      .subscribe((data) => {
        if (data.code % 2) {
          this.articleCount = data.data;
        } else {
          this.articleCount = 26;
        }
      });

    // 获取分类的总个数
    this.httpService.get("/category/count")
      .subscribe((data) => {
        if (data.code % 2) {
          this.categoryCount = data.data;
        } else {
          this.articleCount = 18;
        }
      });
  }

}
