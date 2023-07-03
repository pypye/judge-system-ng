import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'judge-system-ng-problem-submit-main',
  templateUrl: './problem-submit-main.component.html',
  styleUrls: ['./problem-submit-main.component.scss'],
})
export class ProblemSubmitMainComponent {
  selectedLanguage = 'cpp';
  editorOptions = {theme: 'vs-light', language: this.selectedLanguage};
  code= 'function x() {\nconsole.log("Hello world!");\n}';

  submitForm = this.fb.group({
    problemCode: ['', Validators.required],
    language: ['cpp', Validators.required],
    code: [''],
  })

  constructor(private fb: FormBuilder) {
  }

  changeLanguage(event:string){
    console.log(event);
    // this.selectedLanguage = event.target.value;
    // this.editorOptions = {theme: 'vs-light', language: this.selectedLanguage};
  }

  onSubmit() {
    console.log(this.submitForm.value)
  }
}
