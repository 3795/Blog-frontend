import {Component, Input, OnInit} from '@angular/core';
import {GetService} from "../../service/get.service";
import {Category} from "../../pages/pages.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  public apiUrl: string;

  public categoryName: string;

  public categories: Category[] = [];

  constructor(private getService: GetService,
              private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.apiUrl = this.apiUrl.replace(/\?page=\d+/, "") + "/children";
    this.getService.get(this.apiUrl)
      .subscribe(data => {
        if(data['code'] == 404) {
          return;
        }
        else {
          this.categoryName = data['data']['name'];
          this.categories = data['data']['categoryDtos'];
          this.titleService.setTitle("NTShare-" + this.categoryName);
        }
      });
  }

  /**
   * 改变分类
   * @param {string} navUrl
   */
  public changeCategory(id: number) {
    this.router.navigateByUrl("/transitionPage")
      .then(() => {
        this.router.navigate(["/category/" + id]);
      });
  }

}
