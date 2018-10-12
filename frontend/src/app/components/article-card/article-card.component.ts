import {Component, Input, OnInit} from '@angular/core';
import {ArticleCard, PagesService} from "../../pages/pages.service";
import {Router} from "@angular/router";

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

  constructor(private pagesService: PagesService,
              private router: Router) { }

  ngOnInit() {
    this.pagesService.getArticleCards(this.apiUrl)
      .subscribe(data => {
        if(data['code'] == 404) {
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


