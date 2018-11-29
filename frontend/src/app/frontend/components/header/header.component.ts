import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public keywords: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search(): void {
    this.keywords = this.keywords.replace(/\s+/g,"");
    if(this.keywords !== "") {
      this.router.navigateByUrl("/transitionPage").then(() => {
        this.router.navigate(["/search"],
          {queryParams: {"keywords": this.keywords}});
        this.keywords = "";
      });
    }
  }
}
