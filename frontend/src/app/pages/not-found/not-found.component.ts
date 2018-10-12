import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public page;

  constructor(private router: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("NTShare-未知空间");
  }

}
