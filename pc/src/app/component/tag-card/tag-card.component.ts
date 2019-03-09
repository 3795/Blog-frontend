import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/HttpService";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.css']
})
export class TagCardComponent implements OnInit {

  public baseUrl: string = "/tag";

  public tag: object = {};

  private id: number;

  constructor(private httpService: HttpService,
              private routeInfo: ActivatedRoute,
              private router: Router,
              private titleService: Title) { }

  ngOnInit() {

    this.routeInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.httpService.get(this.baseUrl + "/" + this.id)
      .subscribe((data) => {
        if (data.code % 2) {
          this.tag = data.data;
          this.titleService.setTitle("NTShare-" + data.data['name']);
          document.getElementById("tagName").style.color = this.tag['color'];
        } else {
          this.router.navigateByUrl("/404");
        }
      });
  }

}
