import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css']
})
export class CarouselImgComponent implements OnInit {

  private baseUrl: string = "/carouselImg";

  public imgs: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get(this.baseUrl)
      .subscribe((data) => {
        this.imgs = data.data;
      });
  }

}
