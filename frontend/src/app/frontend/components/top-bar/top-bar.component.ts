import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public keywords;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public search() {
    this.keywords = this.keywords.replace(/\s+/g,"");
    if(this.keywords !== "") {
      this.router.navigateByUrl("//transitionPage").then(() => {
        this.router.navigate(["/search"],
          {queryParams: {"keywords": this.keywords}});
        this.keywords = "";
      });
    }
  }

}
