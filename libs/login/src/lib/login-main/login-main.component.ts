import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "@judge-system-ng/api";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'judge-system-ng-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss'],
})
export class LoginMainComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private loginApi: LoginService, private router: Router, private notification: NzNotificationService) {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
    this.loginApi.doLogin(this.loginForm.value).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['/']);
      } else {
        this.notification.error('Login failed', res.message);
      }
    });
  }
}
