import { Component, OnInit } from '@angular/core';
import {FrontendService} from "../frontend/service/frontend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  height: number = document.documentElement.clientHeight;
  state = {
    open: false
  };

  constructor(private frontendService: FrontendService,
              private router: Router) { }

  ngOnInit() {
    this.getInfo();
    this.initNavigation();
    this.getCount();
  }

  onOpenChange(event) {
    this.state.open = !this.state.open;
  }

  public username: string;
  public avatar: string;

  public navigations: any[] = [];

  public articleCount: number = 0;
  public categoryCount: number = 0;

  /**
   * 获得用户信息
   */
  getInfo(): void {
    this.frontendService.get("/user")
      .subscribe((data) => {
        this.username = data.data['username'];
        this.avatar = data.data['avatar'];
      });
  }

  /**
   * 初始化导航数据
   */
  initNavigation(): void {
    this.frontendService.get("/navigation")
      .subscribe( (data) => {
        this.navigations = data.data;
      });
  }

  /**
   * 切换导航
   * @param {string} url
   */
  public changeCategory(url: string) {
    if (url == '') {
      this.router.navigateByUrl("/mobile");
      this.state.open = !this.state.open;
    } else {
      url = "/mobile" + url;
      this.router.navigateByUrl("/mobile/transition")
        .then(() => {
          this.router.navigate([url]);
          this.state.open = !this.state.open;
        });
    }

  }

  /**
   * 获取数量
   */
  public getCount(): void {
    // 获取文章的总数量
    this.frontendService.get("/article/count")
      .subscribe((data) => {
        if (data.code % 2) {
          this.articleCount = data.data;
        } else {
          this.articleCount = 26;
        }
      });

    // 获取分类的总个数
    this.frontendService.get("/category/count")
      .subscribe((data) => {
        if (data.code % 2) {
          this.categoryCount = data.data;
        } else {
          this.articleCount = 18;
        }
      });
  }
}
