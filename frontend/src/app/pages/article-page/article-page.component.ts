import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public id: number;    // 文章的id

  public title: string;   // 文章的标题

  constructor(private routerInfo: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  /**
   * 监听子组件传递过来的title
   * @param {string} title
   */
  onTitle(title: string) {
    this.titleService.setTitle("NTShare-" + title);
    this.title = title;
  }

}
