import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  public keywords;

  constructor(private routeInfo: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeInfo.queryParams.subscribe((params: Params) => {
      this.keywords = params['keywords'];
    });
  }

  public search() {
    this.keywords = this.keywords.replace(/\s+/g,"");
    if(this.keywords !== "") {
      this.router.navigateByUrl("/transitionPage").then(() => {
        this.router.navigate(["/search"],
          {queryParams: {"keywords": this.keywords}});
      });
    }
  }

}
