import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchManagementRoutingModule } from './batch-management-routing.module';
import { BatchManagementComponent } from './batch-management.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UIModule } from 'src/app/shared/ui/ui.module';

@NgModule({
  declarations: [BatchManagementComponent],
  imports: [
	  BatchManagementRoutingModule,
	  NgSelectModule,
	  FormsModule,
	  ReactiveFormsModule,
	  NgbPaginationModule,
	  NgbTypeaheadModule,
	  NgbDatepickerModule,
	  UIModule,
	  HttpClientModule,
    CommonModule
  ],
  entryComponents: [
    BatchManagementComponent
  ]
})
export class BatchManagementModule { }
