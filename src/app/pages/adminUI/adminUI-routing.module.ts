import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [{
        path: 'sweet-alert',
        component: SweetalertComponent
    },
    {
        path: 'range-slider',
        component: RangesliderComponent
    },
    {
        path: 'carousel',
        component: CarouselComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminUIRoutingModule { }
