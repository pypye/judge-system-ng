import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@judge-system-ng/api";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService],
})
export class GuardsModule {}
