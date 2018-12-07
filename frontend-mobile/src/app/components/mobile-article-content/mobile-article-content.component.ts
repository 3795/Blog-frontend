import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-mobile-article-content',
  templateUrl: './mobile-article-content.component.html',
  styleUrls: ['./mobile-article-content.component.css']
})
export class MobileArticleContentComponent implements OnInit {

  public id: number;

  public content: string;

  public spin: boolean = true;

  constructor(private routerInfo: ActivatedRoute,
              private titleService: Title,
              private httpService: HttpService,
              private router: Router) { }


  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.httpService.get("/article/" + this.id)
      .subscribe((data) => {
        if (data.code % 2) {
          this.content = data.data['content'];
          this.spin = false;
        } else {
          this.router.navigateByUrl("/404");
        }
      });

  }

}
