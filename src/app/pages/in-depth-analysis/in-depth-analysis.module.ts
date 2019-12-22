import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InDepthAnalysisRoutingModule } from './in-depth-analysis-routing.module';
import { InDepthAnalysisComponent } from './in-depth-analysis.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { HeatMapsComponent } from './heat-maps/heat-maps.component';
import { AudiencePollComponent } from './audience-poll/audience-poll.component';
import { TrendsComponent } from './trends/trends.component';

@NgModule({
  declarations: [InDepthAnalysisComponent, TopArtistsComponent, HeatMapsComponent, AudiencePollComponent, TrendsComponent],
  imports: [
    CommonModule,
    InDepthAnalysisRoutingModule
  ]
})
export class InDepthAnalysisModule { }
