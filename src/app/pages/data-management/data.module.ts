import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartistModule } from 'ngx-chartist';
import { ChartsModule } from 'ng2-charts';
import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DataManagementComponent } from './data-management.component';
import { DataRoutingModule } from './data.routing.module';

@NgModule({
    declarations: [
        DataManagementComponent,
    ],
    imports: [
        DataRoutingModule,
        CommonModule,
        UIModule,
        NgApexchartsModule,
        NgxChartistModule,
        ChartsModule,
        NgSelectModule,
        NgbDatepickerModule,

    ]
})
export class DataModule { }
