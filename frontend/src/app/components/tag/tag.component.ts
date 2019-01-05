import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  public tags: any = [];

  private baseUrl: string = "/tag";

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.httpService.get(this.baseUrl)
      .subscribe((data) => {
        this.tags = data.data;
      });
  }

  changeTag(id: number): void {
    this.router.navigateByUrl("/transitionPage")
      .then(() => {
        this.router.navigateByUrl(this.baseUrl + "/" + id)
      });
  }

}
