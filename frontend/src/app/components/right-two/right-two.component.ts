import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-right-two',
  templateUrl: './right-two.component.html',
  styleUrls: ['./right-two.component.css']
})
export class RightTwoComponent implements OnInit {

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
