import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenereComponent } from './genere/genere.component';
import { NewLaunchComponent } from './new-launch/new-launch.component';
import { DurationComponent } from './duration/duration.component';
import { ContentComponent } from './content/content.component';
import { BeingWatchComponent } from './being-watch/being-watch.component';
import { ShowAnalysisComponent } from './show-analysis.component';
import { OriginalsComponent } from './originals/originals.component';

const routes: Routes = [{
  path: '',
  component: ShowAnalysisComponent,
  children: [
    {
      path: 'new-launch',
      component: NewLaunchComponent,
    },
    {
      path: 'genere',
      component: GenereComponent,
    },
    {
      path: 'duration',
      component: DurationComponent,
    },
    {
      path: 'content',
      component: ContentComponent,
    },
    {
      path: 'being-watch',
      component: BeingWatchComponent,
    },
    {
      path:'originals',
      component:OriginalsComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAnalysisRoutingModule { }
