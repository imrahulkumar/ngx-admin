import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatFormAnalysisRoutingModule } from './plat-form-analysis-routing.module';
import { OtsComponent } from './ots/ots.component';
import { ReachComponent } from './reach/reach.component';
import { TsvComponent } from './tsv/tsv.component';
import { ShareComponent } from './share/share.component';
import { BeingWatchComponent } from './being-watch/being-watch.component';
import { PlatFormAnalysisComponent } from './plat-form-analysis.component';

@NgModule({
  declarations: [OtsComponent, ReachComponent, TsvComponent, ShareComponent, BeingWatchComponent, PlatFormAnalysisComponent],
  imports: [
    CommonModule,
    PlatFormAnalysisRoutingModule
  ]
})
export class PlatFormAnalysisModule { }
