import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartistModule } from 'ngx-chartist';
import { ChartsModule } from 'ng2-charts';
import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportRoutingModule } from './report.routing.module';
import { ReportSearchComponent } from './report-search/report-search.component';
import { ReportApproveComponent } from './report-approve/report-approve.component';
import { ReportCreateComponent } from './report-create/report-create.component';

@NgModule({
    declarations: [
        ReportSearchComponent,
        ReportApproveComponent,
        ReportCreateComponent 
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        UIModule,
        NgApexchartsModule,
        NgxChartistModule,
        ChartsModule,
        NgSelectModule,
        NgbDatepickerModule,

    ]
})
export class ReportModule { }
