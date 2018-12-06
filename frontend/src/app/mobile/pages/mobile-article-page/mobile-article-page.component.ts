import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FrontendService} from "../../../frontend/service/frontend.service";

@Component({
  selector: 'app-mobile-article-page',
  templateUrl: './mobile-article-page.component.html',
  styleUrls: ['./mobile-article-page.component.css']
})
export class MobileArticlePageComponent implements OnInit {

  public id: number;

  public article: object;

  public spin: boolean = true;

  constructor(private routerInfo: ActivatedRoute,
              private titleService: Title,
              private frontendService: FrontendService,
              private router: Router) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.frontendService.get("/article/" + this.id)
      .subscribe((data) => {
        if (data.code % 2) {
          this.article = data.data;
          this.titleService.setTitle(data.data['title']);
          this.spin = false;
        } else {
          this.router.navigateByUrl("/mobile/404");
        }
      });

  }

}
