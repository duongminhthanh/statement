import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../shared/ui/ui.module';

import { IconsRoutingModule } from './icons-routing.module';

import { RemixComponent } from './remix/remix.component';
import { FeatherComponent } from './feather/feather.component';
import { MaterialComponent } from './material/material.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { ThemifyComponent } from './themify/themify.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [RemixComponent, FeatherComponent, MaterialComponent, FontawesomeComponent, ThemifyComponent, WeatherComponent],
  imports: [
    CommonModule,
    UIModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
