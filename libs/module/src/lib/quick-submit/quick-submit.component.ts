import {Component} from '@angular/core';
import {NzUploadFile} from "ng-zorro-antd/upload";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {QuickSubmitService} from "@judge-system-ng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'judge-system-ng-quick-submit',
  templateUrl: './quick-submit.component.html',
  styleUrls: ['./quick-submit.component.scss'],
})
export class QuickSubmitComponent {
  fileList: NzUploadFile[] = [];
  uploading = false;

  constructor(private notification: NzNotificationService, private quickSubmitApi: QuickSubmitService, private router: Router) {
  }

  beforeUpload = (file: NzUploadFile) => {
    const parsedName = file.name.split('.');
    if (parsedName.length < 2) {
      this.notification.error('No extension', 'Please upload a file with extension');
      return false;
    } else {
      const extension = parsedName[parsedName.length - 1];
      if (extension !== 'cpp' && extension !== 'c' && extension !== 'java' && extension !== 'py' && extension !== 'pas') {
        this.notification.error('Incorrect extension', 'Please upload a file with extension .cpp, .c, .java, .py or .pas');
        return false;
      }
    }
    if (file.size && file.size > 1024 * 1024) {
      this.notification.error('File too large', 'Please upload a file smaller than 1MB');
      return false;
    }
    this.fileList = [file];
    return false;
  }

  onUpload() {
    this.uploading = true;
    this.quickSubmitApi.submit(this.fileList[0]).subscribe({
      next: () => {
        this.uploading = false;
        this.notification.success('Upload success', 'Your file has been uploaded');
        this.router.navigate(['/problemsets/history']);
      },
      error: (err) => {
        this.uploading = false;
        this.notification.error('Upload failed', err.error.message);
      }
    })
  }
}
