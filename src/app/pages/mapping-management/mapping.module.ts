import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartistModule } from 'ngx-chartist';
import { ChartsModule } from 'ng2-charts';
import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MappingRoutingModule } from './mapping.routing.module';
import { MappingDataComponent } from './mapping-data/mapping-data.component';
import { MappingLogComponent } from './mapping-log/mapping-log.component';

@NgModule({
    declarations: [
        MappingDataComponent,
        MappingLogComponent, 
    ],
    imports: [
        CommonModule,
        MappingRoutingModule,
        UIModule,
        NgApexchartsModule,
        NgxChartistModule,
        ChartsModule,
        NgSelectModule,
        NgbDatepickerModule,

    ]
})
export class MappingModule { }
