import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public keywords;

  public apiUrl: string = "/article/search";

  public navUrl: string = "/search";

  public page: number;

  constructor(private routeInfo: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("NTShare-搜索");
    this.routeInfo.queryParams.subscribe((params: Params) => {
      this.keywords = params['keywords'];
      this.page = params['page'];
    });

    if(this.keywords == undefined)
      return ;
    else {
      this.navUrl += "?keywords=" + this.keywords;
      if(this.page != undefined)
        this.apiUrl += "?keywords=" + this.keywords + "&page=" + this.page;
      else
        this.apiUrl += "?keywords=" + this.keywords;
    }
  }

}
