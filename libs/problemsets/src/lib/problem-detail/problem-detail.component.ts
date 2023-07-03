import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'judge-system-ng-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.scss'],
})
export class ProblemDetailComponent implements OnInit {
  problemCode: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.problemCode = this.route.snapshot.paramMap.get('id')
  }
}
