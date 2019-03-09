import {Component, Input, OnInit} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-mobile-article-card',
  templateUrl: './mobile-article-card.component.html',
  styleUrls: ['./mobile-article-card.component.css']
})
export class MobileArticleCardComponent implements OnInit {

  public articleCards: any[] = [];

  public pageNum: number = 1;
  public pages: number = 0;

  public loading: boolean = true;

  @Input()
  private apiUrl: string;

  constructor(private frontendService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.initDate();
  }

  initDate(): void {
    let params: HttpParams = new HttpParams().set("pageNum", this.pageNum.toString());
    this.frontendService.getWithParams(this.apiUrl, params)
      .subscribe(data => {
        if(!(data['code']%2)) {
          this.router.navigateByUrl("/404");
        }
        else {
          this.articleCards = data['data']['list'];
          this.pageNum = data['data']['pageNum'];
          this.pages = data['data']['pages'];
          this.loading = false;
        }
      });
  }


  turnPage(nowPageNum: number): void {
    this.pageNum = nowPageNum;
    this.initDate();
  }

}
