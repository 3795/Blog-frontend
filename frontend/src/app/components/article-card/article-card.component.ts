import { Component, OnInit } from '@angular/core';
import {ArticleCard, PagesService} from "../../pages/pages.service";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  public articleCards: ArticleCard[] = [];

  public currentPage: number = 1;
  public maxPage: number;

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    this.pagesService.getArticleCards()
      .subscribe(data => {
        this.articleCards = data['data']['articleCardDTOList'];
        this.currentPage = data['data']['currentPage'];
        this.maxPage = data['data']['maxPage'];
      });
  }

}


