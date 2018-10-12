import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GetService} from "../../service/get.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public apiUrl: string = "article";

  public id: number;

  public title: string;

  public content: string;

  constructor(private routerInfo: ActivatedRoute,
              private router: Router,
              private getService: GetService,
              private titleService: Title) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.apiUrl += "/" + this.id;
    });

    this.getService.get(this.apiUrl)
      .subscribe(data => {
        if(data['code'] == 404)
          this.router.navigateByUrl("/404");
        else {
          this.titleService.setTitle("NTShare-" + data['data']['title']);
          this.title = data['data']['title'];
          this.content = data['data']['content'];
        }
      });
  }

}
