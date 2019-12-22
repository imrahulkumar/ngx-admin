import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { RealTimeComponent } from './real-time/real-time.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'dashboard',
      component: DashboardviewComponent,
    },
    {
      path: 'real-time',
      component: RealTimeComponent,
    },
    {
      path: 'platform-analysis',
      loadChildren: () => import('./plat-form-analysis/plat-form-analysis.module').then(m => m.PlatFormAnalysisModule),
    },
    {
      path: 'show-analysis',
      loadChildren: () => import('./show-analysis/show-analysis.module').then(m => m.ShowAnalysisModule),
    }, 
    {
      path: 'in-depth-analysis',
      loadChildren: () => import('./in-depth-analysis/in-depth-analysis.module').then(m => m.InDepthAnalysisModule)
    }, 
    {
      path: 'audience',
      loadChildren: () => import('./audience/audience.module').then(m => m.AudienceModule)
    },   
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      loadChildren: () => import('./miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule)
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
