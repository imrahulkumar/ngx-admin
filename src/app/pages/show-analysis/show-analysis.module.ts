import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowAnalysisRoutingModule } from './show-analysis-routing.module';
import { ContentComponent } from './content/content.component';
import { GenereComponent } from './genere/genere.component';
import { DurationComponent } from './duration/duration.component';
import { BeingWatchComponent } from './being-watch/being-watch.component';
import { OriginalsComponent } from './originals/originals.component';
import { NewLaunchComponent } from './new-launch/new-launch.component';
import { ShowAnalysisComponent } from './show-analysis.component';

@NgModule({
  declarations: [ContentComponent, GenereComponent, DurationComponent, BeingWatchComponent, OriginalsComponent, NewLaunchComponent,ShowAnalysisComponent],
  imports: [
    CommonModule,
    ShowAnalysisRoutingModule
  ]
})
export class ShowAnalysisModule { }
