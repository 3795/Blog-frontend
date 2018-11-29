import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

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
