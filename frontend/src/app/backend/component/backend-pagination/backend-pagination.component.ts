import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-backend-pagination',
  templateUrl: './backend-pagination.component.html',
  styleUrls: ['./backend-pagination.component.css']
})

export class BackendPaginationComponent implements OnInit{

  @Input()
  public total: number;

  @Input()
  public pageNum: number;

  @Output()
  public nowPageNum = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  turnPage() {
    this.nowPageNum.emit(this.pageNum);
  }

}
