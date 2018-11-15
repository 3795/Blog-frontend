import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  public apiUrl: string = "/article";

  public page: number;

  public navUrl: string = "/";

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe((params: Params) => this.page = params['page']);
    if(this.page !== undefined) {
      this.apiUrl = this.apiUrl + "/?page=" + this.page;
    }
  }

}
