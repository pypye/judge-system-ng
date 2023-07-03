import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutModule} from "@judge-system-ng/layout";
import {HttpClientModule} from "@angular/common/http";
@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, HttpClientModule],
  selector: 'judge-system-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'judge-system-ng';
}
