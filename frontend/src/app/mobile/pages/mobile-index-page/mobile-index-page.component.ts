import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-index-page',
  templateUrl: './mobile-index-page.component.html',
  styleUrls: ['./mobile-index-page.component.css']
})
export class MobileIndexPageComponent implements OnInit {

  public apiUrl: string = "/article";

  constructor() { }

  ngOnInit() {
  }

}
