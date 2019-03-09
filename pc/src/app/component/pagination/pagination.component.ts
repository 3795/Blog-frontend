import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  public pageNum: number = 1;

  @Input()
  public total: number = 0;

  @Output()
  public nowPageNum = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  turnPage($event): void {
    this.nowPageNum.emit($event);
  }

}
