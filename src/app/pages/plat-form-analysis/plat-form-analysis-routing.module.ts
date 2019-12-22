import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatFormAnalysisComponent } from './plat-form-analysis.component';
import { OtsComponent } from './ots/ots.component';
import { ReachComponent } from './reach/reach.component';
import { TsvComponent } from './tsv/tsv.component';
import { ShareComponent } from './share/share.component';
import { BeingWatchComponent } from './being-watch/being-watch.component';

const routes: Routes = [{
  path: '',
  component: PlatFormAnalysisComponent,
  children: [
    {
      path: 'ots',
      component: OtsComponent,
    },
    {
      path: 'reach',
      component: ReachComponent,
    },
    {
      path: 'tsv',
      component: TsvComponent,
    },
    {
      path: 'share',
      component: ShareComponent,
    },
    {
      path: 'being-watch',
      component: BeingWatchComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatFormAnalysisRoutingModule { }
