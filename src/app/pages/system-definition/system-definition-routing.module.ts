import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ValidationComponent } from "../form/validation/validation.component";
import { AdvancedComponent } from "../tables/advanced/advanced.component";
import { BasicComponent } from "../tables/basic/basic.component";
import { DefineBatchProcessComponent } from "./define-batch-process/define-batch-process.component";
import { DefineDataEditorComponent } from "./define-data-editor/define-data-editor.component";
import { DefineDataQueryComponent } from "./define-data-query/define-data-query.component";
import { DefineImportFileComponent } from "./define-import-file/define-import-file.component";
import { ReportComponent } from "./define-report/report/report.component";
import { DocumentComponent } from "./file-management/document/document.component";
import { FomartFileComponent } from "./file-management/fomart-file/fomart-file.component";
import { ReportTemplateFileComponent } from "./file-management/report-template-file/report-template-file.component";
import { ReportValidationFileComponent } from "./file-management/report-validation-file/report-validation-file.component";
import { ProcedureManagementComponent } from "./procedure-management/procedure-management.component";
import { TableManagementComponent } from "./table-management/table-management.component";
import { TaskSchedulerComponent } from "./task-scheduler/task-scheduler.component";

const routes: Routes = [
	{
        path: 'table-management',
        component: TableManagementComponent

    },
	{
        path: 'task-scheduler',
        component: TaskSchedulerComponent

    },
	{
        path: 'validation',
        component: ValidationComponent

    },
	{
        path: 'report',
        component: ReportComponent

    },
	{
        path: 'define-import-file',
        component: DefineImportFileComponent

    },
	{
        path: 'define-data-query',
        component: DefineDataQueryComponent

    },
	{
        path: 'define-data-editor',
        component: DefineDataEditorComponent

    },
	{
        path: 'define-batch-process',
        component: DefineBatchProcessComponent

    },
	{
        path: 'procedure-management',
        component: ProcedureManagementComponent

    },
	{
        path: 'document',
        component: DocumentComponent

    },
	{
        path: 'report-validation-file',
        component: ReportValidationFileComponent

    },
	{
        path: 'report-template-file',
        component: ReportTemplateFileComponent
    },
    {
        path: 'fomart-file',
        component: FomartFileComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemDefinitionRoutingModule { }