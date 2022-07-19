import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingDataComponent } from './mapping-data/mapping-data.component';
import { MappingLogComponent } from './mapping-log/mapping-log.component';


const routes: Routes = [
    {
        path: 'mapping-data',
        component: MappingDataComponent
    },
    {
        path: 'mapping-log',
        component: MappingLogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MappingRoutingModule { }
