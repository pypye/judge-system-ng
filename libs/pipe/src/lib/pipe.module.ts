import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerdictPipe } from './verdict.pipe';
import { VerdictFrExcPipe } from './verdict-fr-exc.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [VerdictPipe, VerdictFrExcPipe],
  exports: [VerdictPipe, VerdictFrExcPipe],
})
export class PipeModule {}
