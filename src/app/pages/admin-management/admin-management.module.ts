import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { DepartmentManagementComponent } from './department-management/department-management.component';
import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { GroupManagementComponent } from './group-management/group-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UnitManagementComponent } from './unit-management/unit-management.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgxChartistModule } from 'ngx-chartist';
import { DepartmentModalComponent } from './department-management/department-modal/department-modal.component';
import { UserModalComponent } from './user-management/user-modal/user-modal.component';
import { GroupModalComponent } from './group-management/group-modal/group-modal.component';
import { UnitModalComponent} from "./unit-management/unit-modal/unit-modal.component";
import { ConfigManagementModule } from './config-management/config-management.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDemo2Component } from './user-demo2/user-demo2.component';
import { UserDemo2ModalComponent } from './user-demo2/user-demo2-modal/user-demo2-modal.component';


@NgModule({
  declarations: [
    DepartmentManagementComponent,
    DepartmentModalComponent,
    GroupManagementComponent,
    GroupModalComponent,
    UserManagementComponent,
    UserModalComponent,
    UnitManagementComponent,
    UnitModalComponent,
    UserDemo2Component,
    UserDemo2ModalComponent
  ],
  imports: [
    AdminManagementRoutingModule,
    ConfigManagementModule,
    CommonModule,
    UIModule,
    NgApexchartsModule,
    NgxChartistModule,
    ChartsModule,
    NgSelectModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    DepartmentModalComponent,
    GroupModalComponent,
    UserModalComponent,
    UnitModalComponent,UserDemo2ModalComponent
  ]
})
export class AdminManagementModule { }
