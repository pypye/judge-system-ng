import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogoutService} from "@judge-system-ng/api";
@Component({
  selector: 'judge-system-ng-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit{
  @Input() split = true;
  @Input() subHeader = true;
  name = 'Unknown';

  constructor(private router: Router, private logoutApi: LogoutService) {
  }

  ngOnInit() {
    this.name = JSON.parse(localStorage.getItem('user') || '{}')["name"];
  }

  isHeaderActive(url: string) {
    if (url === '/' || url === '') {
      return this.router.url === url;
    } else {
      return this.router.url.startsWith(url);
    }
  }

  isSubHeaderActive(url: string) {
    return this.router.url === url;
  }

  onLogout() {
    this.logoutApi.doLogout().subscribe(() => {
      this.router.navigate(['/login']);
    });

  }
}
