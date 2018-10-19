import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isPC: boolean = true;

  public isMobile: boolean = false;

  ngOnInit(): void {
    let width = window.innerWidth;
    if(width < 500) {     //如果小于500px，则判断为移动端
      this.isPC = false;
      this.isMobile = true;
    }
  }

}
