import {Component, Input, OnInit} from '@angular/core';
import {PagesService} from "../../pages/pages.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  public currentPage: number;

  @Input()
  public maxPage: number;

  @Input()
  public navUrl: string;

  constructor(private pagesService: PagesService,
              private router: Router) { }

  ngOnInit() {}

  /**
   * 进行翻页
   * @param pageNumber
   * @returns {Promise<void>}
   */
  pageTurning(pageNumber) {
    let reg = /\?keywords=.*/;
    this.router.navigateByUrl("/transitionPage")
      .then(() => {
        if(reg.test(this.navUrl)) {
          let param = this.navUrl.replace(/\/.*\?.*=/, "");   //将原url中的参数清洗出来
          this.navUrl = this.navUrl.replace(/\?.*/, "");    //将url清洗出来
          this.router.navigate([this.navUrl],
            {queryParams: {"keywords": param, "page": pageNumber}});
        }
        else
          this.router.navigate([this.navUrl],
          {queryParams: {"page": pageNumber}})
      });
  }

}
