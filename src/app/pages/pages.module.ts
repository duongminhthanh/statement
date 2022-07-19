import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';
import { AppsModule } from './apps/apps.module';
import { EmailModule } from './email/email.module';
import { AdminUIModule } from './adminUI/adminUI.module';
import { ExtrasModule } from './extras/extras.module';
import { FormModule } from './form/form.module';
import { UiModule } from './ui/ui.module';
import { TablesModule } from './tables/tables.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { MapsModule } from './maps/maps.module';
import { ErrorModule } from './error/error.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { ImportModule } from './import-management/import.module';
import { AdminManagementModule } from './admin-management/admin-management.module';
import { ReportModule } from './report-management/report.module';
import { MappingModule } from './mapping-management/mapping.module';
import { DataModule } from './data-management/data.module';
import { SystemDefinitionModule } from './system-definition/system-definition.module';
import { BrokerConfirmationComponent } from './broker-confirmation/broker-confirmation.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BatchManagementModule } from './batch-management/batch-management.module';
import { AbcManagementComponent } from './abc-management/abc-management.component';

@NgModule({
  declarations: [WidgetsComponent, BrokerConfirmationComponent, AbcManagementComponent],
  imports: [
    DataModule,
    ReportModule,
    MappingModule,
    ImportModule,
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
	NgSelectModule,
    DashboardsModule,
    PagesRoutingModule,
    AppsModule,
    EmailModule,
    ReactiveFormsModule,
    ExtrasModule,
    FormModule,
    AdminUIModule,
    UiModule,
    UIModule,
    TablesModule,
    IconsModule,
    ChartModule,
    MapsModule,
    ErrorModule,
    AdminManagementModule,
	SystemDefinitionModule,
	BatchManagementModule,
  ]
})
export class PagesModule { }
