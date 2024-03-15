import { Component, Input, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { UtilsService } from "../services/utils.service";

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input('total') total: number = 0;
  @Input('limit') limit: number = 1;
  @Input('currentPage') currentPage: number = 1;
  @Input('url') url: string;

  pagesCount: number;
  pages: number[];

  constructor(private utilsService: UtilsService) { };

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.utilsService.range(1, this.pagesCount);
  };
};
