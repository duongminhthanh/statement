import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportApproveComponent } from './report-approve/report-approve.component';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportSearchComponent } from './report-search/report-search.component';


const routes: Routes = [
    {
        path: 'report-approve',
        component: ReportApproveComponent
    },
    {
        path: 'report-create',
        component: ReportCreateComponent
    },
    {
        path: 'report-search',
        component: ReportSearchComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }
