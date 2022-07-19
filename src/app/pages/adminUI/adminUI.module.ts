import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng5SliderModule } from 'ng5-slider';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';

import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdminUIRoutingModule } from './adminUI-routing.module';

@NgModule({
  declarations: [SweetalertComponent, RangesliderComponent, CarouselComponent],
  imports: [
    CommonModule,
    Ng5SliderModule,
    NgbCarouselModule,
    UIModule,
    AdminUIRoutingModule
  ]
})
export class AdminUIModule { }
