import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../../service/http.service";

/**
 * 该组件暂时封存，未使用
 */
@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  private id: number;

  public content: string = "";

  constructor(private routerInfo: ActivatedRoute,
              private httpService: HttpService) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];

      this.httpService.get("/article/" + this.id + "/content")
        .subscribe((data) => {
            this.content = data.data;
        });
    });
  }

}
