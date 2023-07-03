import {Component, OnInit} from '@angular/core';
import {ProblemListService} from "@judge-system-ng/api";

@Component({
  selector: 'judge-system-ng-problem-list-table',
  templateUrl: './problem-list-table.component.html',
  styleUrls: ['./problem-list-table.component.scss'],
})
export class ProblemListTableComponent implements OnInit {
  data = [];

  constructor(private problemListApi: ProblemListService) {
  }

  ngOnInit() {
    this.problemListApi.getProblemList().subscribe((res: any) => {
      this.data = res;
    });

  }
}
