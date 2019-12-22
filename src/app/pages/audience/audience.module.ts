import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudienceComponent } from './audience.component';
import { AudienceRoutingModule } from './audience-routing.module';
import { LocationComponent } from './location/location.component';
import { LanguageComponent } from './language/language.component';
import { DevicesComponent } from './devices/devices.component';


@NgModule({
  declarations: [LocationComponent, LanguageComponent, DevicesComponent,AudienceComponent],
  imports: [
    CommonModule,
    AudienceRoutingModule
  ]
})
export class AudienceModule { }
