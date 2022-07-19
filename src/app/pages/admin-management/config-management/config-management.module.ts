import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng5SliderModule } from 'ng5-slider';
import { NgbCarouselModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from 'src/app/shared/ui/ui.module';
import { ParameterConfigComponent } from './parameter-config/parameter-config.component';
import { ConfigManagementRoutingModule } from './config-management-routing.module';
import { CalendarManagementComponent } from './calendar-management/calendar-management.component';
import { WorkingDateComponent } from './working-date/working-date.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgxChartistModule } from 'ngx-chartist';
import { WorkingDateModalComponent } from './working-date/working-date-modal/working-date-modal.component';

@NgModule({
  declarations: [
    ParameterConfigComponent,
    CalendarManagementComponent,
    WorkingDateComponent,
    WorkingDateModalComponent
  ],
  imports: [
    ConfigManagementRoutingModule,
    CommonModule,
    UIModule,
    NgApexchartsModule,
    NgxChartistModule,
    ChartsModule,
    NgSelectModule,
    NgbDatepickerModule
    
  ],
  entryComponents: [
    WorkingDateModalComponent
  ]
})
export class ConfigManagementModule { }
