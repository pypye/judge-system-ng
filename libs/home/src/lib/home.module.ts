import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { homeRoutes } from './lib.routes';
import { HomeMainComponent } from './home-main/home-main.component';
import {LayoutModule} from "@judge-system-ng/layout";
import {ModuleModule} from "@judge-system-ng/module";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), RouterModule, LayoutModule, ModuleModule],
  declarations: [HomeMainComponent],
})
export class HomeModule {}
