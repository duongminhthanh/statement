import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportDataComponent } from './import-data/import-data.component';
import { ImportLogComponent } from './import-log/import-log.component';


const routes: Routes = [
    {
        path: 'import-data',
        component: ImportDataComponent
    },
    {
        path: 'import-log',
        component: ImportLogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImportRoutingModule { }
