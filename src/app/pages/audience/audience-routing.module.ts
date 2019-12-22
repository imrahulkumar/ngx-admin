import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudienceComponent } from './audience.component';
import { LocationComponent } from './location/location.component';
import { LanguageComponent } from './language/language.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [{
  path: '',
  component: AudienceComponent,
  children: [
    {
      path: 'location',
      component: LocationComponent,
    },
    {
      path: 'language',
      component: LanguageComponent,
    },
    {
      path: 'devices',
      component: DevicesComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudienceRoutingModule { }
