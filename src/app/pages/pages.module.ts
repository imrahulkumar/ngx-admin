import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { RealTimeComponent } from './real-time/real-time.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    DashboardviewComponent,
    RealTimeComponent,
  ],
})
export class PagesModule {
}
