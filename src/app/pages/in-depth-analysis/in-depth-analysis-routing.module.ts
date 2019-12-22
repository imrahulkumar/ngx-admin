import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InDepthAnalysisComponent } from './in-depth-analysis.component';
import { AudiencePollComponent } from './audience-poll/audience-poll.component';
import { HeatMapsComponent } from './heat-maps/heat-maps.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [{
  path: '',
  component: InDepthAnalysisComponent,
  children: [
    {
      path: 'audience-poll',
      component: AudiencePollComponent,
    },
    {
      path: 'heat-maps',
      component: HeatMapsComponent,
    },
    {
      path: 'top-artists',
      component: TopArtistsComponent,
    },
    {
      path: 'trends',
      component: TrendsComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InDepthAnalysisRoutingModule { }
