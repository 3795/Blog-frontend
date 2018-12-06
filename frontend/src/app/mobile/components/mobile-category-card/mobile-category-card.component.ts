import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FrontendService} from "../../../frontend/service/frontend.service";

@Component({
  selector: 'app-mobile-category-card',
  templateUrl: './mobile-category-card.component.html',
  styleUrls: ['./mobile-category-card.component.css']
})
export class MobileCategoryCardComponent implements OnInit {

  public apiUrl: string = "/category/children";

  public categoryName: string;

  public categories: any[] = [];

  public id: number;

  constructor(private frontendService: FrontendService,
              private router: Router,
              private titleService: Title,
              private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.apiUrl += "?id=" + this.id;
    this.frontendService.get(this.apiUrl)
      .subscribe(data => {
        if(!(data['code']%2)) {
          this.router.navigateByUrl("/mobile/404");
        }
        else {
          this.categoryName = data['data']['name'];
          this.categories = data['data']['categoryDTOList'];
          this.titleService.setTitle("NTShare-" + this.categoryName);
        }
      });
  }

  /**
   * 改变分类
   * @param {string} navUrl
   */
  public changeCategory(id: number) {
    this.router.navigateByUrl("/mobile/transition")
      .then(() => {
        this.router.navigate(["/mobile/category/" + id]);
      });
  }

}
