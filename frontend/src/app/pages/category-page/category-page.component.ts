import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  public apiUrl: string = "category";

  public id: number;

  public navUrl: string = "";

  private page: number;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe((params: Params) => {
      this.page = params['page'];
    });

    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.apiUrl += "/" + this.id;
    this.navUrl = this.apiUrl;

    if(this.page != undefined) {
      this.apiUrl += "?page=" + this.page;
    }
  }

}
