import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mobile-search-card',
  templateUrl: './mobile-search-card.component.html',
  styleUrls: ['./mobile-search-card.component.css']
})
export class MobileSearchCardComponent implements OnInit {

  public keywords;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  public search() {
    this.keywords = this.keywords.replace(/\s+/g,"");
    if(this.keywords !== "") {
      this.router.navigateByUrl("/mobile/transition").then(() => {
        this.router.navigate(["/mobile/search"],
          {queryParams: {"keywords": this.keywords}});
      });
    }
  }

}
