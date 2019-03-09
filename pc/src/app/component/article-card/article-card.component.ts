import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../service/HttpService";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  public articleCards: any[] = [];

  public pageNum: number = 1;
  public total: number = 0;

  public loading: boolean = true;

  @Input()
  private apiUrl: string;

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.initDate();
  }

  initDate(): void {
    let params: HttpParams = new HttpParams().set("pageNum", this.pageNum.toString());
    this.httpService.getWithParams(this.apiUrl, params)
      .subscribe(data => {
        if(!(data['code']%2)) {
          this.router.navigateByUrl("/404");
        }
        else {
          this.articleCards = data['data']['list'];
          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
          this.loading = false;
        }
      });
  }


  turnPage(nowPageNum: number): void {
    this.pageNum = nowPageNum;
    this.initDate();
  }

}
