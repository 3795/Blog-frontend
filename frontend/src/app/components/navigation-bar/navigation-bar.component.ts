import {Component, OnInit} from '@angular/core';
import {Author, NavigationBarService} from "./navigation-bar.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public author: Author = new Author();

  public navigations = [];

  constructor(private navigationBarService: NavigationBarService) {
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

}
