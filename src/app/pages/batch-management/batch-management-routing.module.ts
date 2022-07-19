import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BatchManagementComponent } from "./batch-management.component";


const routes: Routes = [
	{
        path: 'batch-management/v1',
        component: BatchManagementComponent

    },
	
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BatchManagementRoutingModule { }