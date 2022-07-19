import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemixComponent } from './remix/remix.component';
import { FeatherComponent } from './feather/feather.component';
import { MaterialComponent } from './material/material.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { ThemifyComponent } from './themify/themify.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
    {
        path: 'remix',
        component: RemixComponent
    },
    {
        path: 'feather',
        component: FeatherComponent
    },
    {
        path: 'material',
        component: MaterialComponent
    },
    {
        path: 'fontawesome',
        component: FontawesomeComponent
    },
    {
        path: 'themify',
        component: ThemifyComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IconsRoutingModule {}
