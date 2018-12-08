import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  public apiUrl: string = "/category/children";

  public categoryName: string;

  public categories: any[] = [];

  public id: number;

  constructor(private httpService: HttpService,
              private router: Router,
              private titleService: Title,
              private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.apiUrl += "?id=" + this.id;
    this.httpService.get(this.apiUrl)
      .subscribe(data => {
        if(!(data['code']%2)) {
          this.router.navigateByUrl("/404");
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
    this.router.navigateByUrl("/transitionPage")
      .then(() => {
        this.router.navigate(["/category/" + id]);
      });
  }

}