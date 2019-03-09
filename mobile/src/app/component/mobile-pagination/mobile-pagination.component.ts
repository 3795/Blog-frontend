import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mobile-pagination',
  templateUrl: './mobile-pagination.component.html',
  styleUrls: ['./mobile-pagination.component.css']
})
export class MobilePaginationComponent implements OnInit {

  @Input()
  public pageNum: number = 1;

  @Input()
  public pages: number = 1;

  @Output()
  public nowPageNum = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  turnPage($event): void {
    this.nowPageNum.emit($event);
  }

}
