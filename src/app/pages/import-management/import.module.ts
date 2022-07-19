import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgApexchartsModule} from 'ng-apexcharts';
import {NgxChartistModule} from 'ngx-chartist';
import {ChartsModule} from 'ng2-charts';
import {UIModule} from '../../shared/ui/ui.module';
import {ImportDataComponent} from './import-data/import-data.component';
import {ImportLogComponent} from './import-log/import-log.component';
import {ImportRoutingModule} from './import.routing.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
    declarations: [
        ImportDataComponent,
        ImportLogComponent,
    ],
    imports: [
        CommonModule,
        ImportRoutingModule,
        UIModule,
        NgApexchartsModule,
        NgxChartistModule,
        ChartsModule,
        NgSelectModule,
        NgbDatepickerModule,
        ReactiveFormsModule,
        SharedModule,
        PdfViewerModule,
        NgbModule,
        FormsModule

    ]
})
export class ImportModule {
}
