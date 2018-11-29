import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {FrontendService} from "../../service/frontend.service";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

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
          this.router.navigateByUrl("/404");
        }
      });

  }

}
