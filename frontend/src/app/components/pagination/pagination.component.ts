import {Component, Input, OnInit} from '@angular/core';
import {PagesService} from "../../pages/pages.service";

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

  constructor(private pagesService: PagesService) { }

  ngOnInit() {}


}
