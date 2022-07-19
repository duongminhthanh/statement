import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { UIModule } from "src/app/shared/ui/ui.module";
import { DefineBatchProcessComponent } from "./define-batch-process/define-batch-process.component";
import { DefineDataEditorComponent } from "./define-data-editor/define-data-editor.component";
import { DefineDataQueryComponent } from "./define-data-query/define-data-query.component";
import { DefineImportFileComponent } from "./define-import-file/define-import-file.component";
import { ReportComponent } from "./define-report/report/report.component";
import { ValidationComponent } from "./define-report/validation/validation.component";
import { DocumentModalComponent } from "./file-management/document/document-modal/document-modal.component";
import { DocumentComponent } from "./file-management/document/document.component";
import { FomartFileComponent } from "./file-management/fomart-file/fomart-file.component";
import { FomartModalComponent } from "./file-management/fomart-file/fomart-modal/fomart-modal.component";
import { ReportTemplateFileComponent } from "./file-management/report-template-file/report-template-file.component";
import { ReportTemplateModalComponent } from "./file-management/report-template-file/report-template-modal/report-template-modal.component";
import { ReportValidationFileComponent } from "./file-management/report-validation-file/report-validation-file.component";
import { ReportValidationModalComponent } from "./file-management/report-validation-file/report-validation-modal/report-validation-modal.component";
import { ProcedureManagementComponent } from "./procedure-management/procedure-management.component";
import { SystemDefinitionRoutingModule } from "./system-definition-routing.module";
import { TableManagementModalComponent } from "./table-management/table-management-modal/table-management-modal.component";
import { TableManagementComponent } from "./table-management/table-management.component";
import { TaskSchedulerComponent } from "./task-scheduler/task-scheduler.component";

@NgModule({
	declarations: [
		FomartFileComponent,
		ReportTemplateFileComponent,
		ReportValidationFileComponent,
		DocumentComponent,
		ProcedureManagementComponent,
		DefineBatchProcessComponent,
		DefineDataEditorComponent,
		DefineDataQueryComponent,
		DefineImportFileComponent,
		ReportComponent,
		ValidationComponent,
		TaskSchedulerComponent,
		TableManagementComponent,
		FomartModalComponent,
		ReportTemplateModalComponent,
		ReportValidationModalComponent,
		DocumentModalComponent,
		TableManagementModalComponent
		],
	imports: [
	  CommonModule,
	  UIModule,
	  SystemDefinitionRoutingModule,
	  HttpClientModule,
	  FormsModule,
	  ReactiveFormsModule,
	  NgbPaginationModule,
	  NgSelectModule,
	  NgbTypeaheadModule,
	  NgbDatepickerModule
	],
	entryComponents: [
		FomartModalComponent,
		ReportTemplateModalComponent,
		ReportValidationModalComponent,
		DocumentModalComponent,
		TableManagementModalComponent
	  ]
  })

  export class SystemDefinitionModule { }