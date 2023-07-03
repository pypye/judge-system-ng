import {Component, Input, OnInit} from '@angular/core';
import {ProblemDetailService} from "@judge-system-ng/api";
import {Location} from "@angular/common";

@Component({
  selector: 'judge-system-ng-problem-detail-main',
  templateUrl: './problem-detail-main.component.html',
  styleUrls: ['./problem-detail-main.component.scss'],
})
export class ProblemDetailMainComponent implements OnInit {
  katexOptions = {
    delimiters: [
      {left: "$$", right: "$$", display: false},
    ]
  }
  @Input() problemCode = '';
  data = {
    notFound: false,
    main: {
      problem_name: '',
      problem_code: '',
      description: {example: [], statement_main: '', statement_note: ''},
      file_input: '',
      file_output: '',
      limit_time: 0,
      limit_memory: 0,
    }
  };

  constructor(private problemDetailApi: ProblemDetailService, private location: Location) {
  }

  ngOnInit() {
    this.problemDetailApi.getProblemDetail(this.problemCode).subscribe({
      next: (data: any) => {
        this.data = {
          notFound: false,
          main: data
        }
      },
      error: (err) => {
        this.data = {...this.data, notFound: true}
      }
    });
  }

  back() {
    this.location.back();
  }
}
