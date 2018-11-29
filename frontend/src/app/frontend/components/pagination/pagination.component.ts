import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FrontendService} from "../../service/frontend.service";

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

  constructor(private pagesService: FrontendService,
              private router: Router) { }

  ngOnInit() {}

  turnPage($event): void {
    this.nowPageNum.emit($event);
  }
}
