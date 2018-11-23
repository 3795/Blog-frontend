import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArticleCard, FrontendService} from "../../service/frontend.service";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  public articleCards: ArticleCard[] = [];

  public currentPage: number = 1;
  public maxPage: number;

  @Input()
  private apiUrl: string;

  @Input()
  public navUrl: string;

  constructor(private pagesService: FrontendService,
              private router: Router) { }

  ngOnInit() {
    this.pagesService.get(this.apiUrl)
      .subscribe(data => {
        if(!(data['code']%2)) {
          this.router.navigateByUrl("/404");
        }
        else {
          this.articleCards = data['data']['articleCardDTOList'];
          this.currentPage = data['data']['currentPage'];
          this.maxPage = data['data']['maxPage'];
        }
      });
  }

}


