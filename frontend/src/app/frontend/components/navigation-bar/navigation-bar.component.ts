import {Component, OnInit} from '@angular/core';
import {Author, NavigationBarService} from "./navigation-bar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public author: Author = new Author();

  public navigations = [];

  constructor(private navigationBarService: NavigationBarService,
              private router: Router) {
  }

  ngOnInit() {

    this.navigationBarService.getAuthorInfo()
      .subscribe(data => {
        this.author = data['data'];
      });

    this.navigationBarService.getNavigations()
      .subscribe(data => {
        this.navigations = data['data'];
      });
  }

  public changeNavigation(navUrl: string) {
    this.router.navigateByUrl("/transitionPage")
      .then(() => {
        this.router.navigate([navUrl]);
      });
  }

}
