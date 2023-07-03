import {Component, OnInit} from '@angular/core';
import {ProblemHistoryPreviewService, ProblemHistoryService} from "@judge-system-ng/api";
import {map} from "rxjs";

@Component({
  selector: 'judge-system-ng-problem-history-table',
  templateUrl: './problem-history-table.component.html',
  styleUrls: ['./problem-history-table.component.scss'],
})
export class ProblemHistoryTableComponent implements OnInit {
  data = []
  modalVisible = false;
  currentPreviewId = ''
  currentPreviewCode = ''
  currentPreviewLog = []
  editorOptions = {theme: 'vs-light', language: 'cpp', readOnly: true};

  constructor(private historyApi: ProblemHistoryService, private historyPreviewApi: ProblemHistoryPreviewService) {
  }

  ngOnInit() {
    this.historyApi.getHistory().subscribe((res: any) => {
      this.data = res;
    })
  }

  showModal(id: string) {
    this.currentPreviewId = id;
    this.modalVisible = true;
    this.historyPreviewApi.getCode(id).subscribe((res: any) => {
      this.currentPreviewCode = res;
    });
    this.historyPreviewApi.getLog(id).pipe(
      map((res: any) => res.log_detail)
    ).subscribe((res: any) => {
      this.currentPreviewLog = res;
    });
  }

  handleCancel() {
    this.currentPreviewId = '';
    this.modalVisible = false;
    this.currentPreviewCode = '';
    this.currentPreviewLog = [];
  }
}
