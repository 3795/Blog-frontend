import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-mobile-search-page',
  templateUrl: './mobile-search-page.component.html',
  styleUrls: ['./mobile-search-page.component.css']
})
export class MobileSearchPageComponent implements OnInit {

  public keywords;

  public apiUrl: string = "/article/search";

  constructor(private routeInfo: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("NTShare-搜索");
    this.routeInfo.queryParams.subscribe((params: Params) => {
      this.keywords = params['keywords'];
    });

    if(this.keywords == undefined)
      return ;
    else {
      this.apiUrl += "?keywords=" + this.keywords;
    }
  }

}
