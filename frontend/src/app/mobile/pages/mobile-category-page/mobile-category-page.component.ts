import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-mobile-category-page',
  templateUrl: './mobile-category-page.component.html',
  styleUrls: ['./mobile-category-page.component.css']
})
export class MobileCategoryPageComponent implements OnInit {

  public apiUrl: string = "/category";

  public id: number;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {

    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.apiUrl += "/" + this.id;
  }

}
