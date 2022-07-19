import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarManagementComponent } from './calendar-management/calendar-management.component';
import { ParameterConfigComponent } from './parameter-config/parameter-config.component';
import { WorkingDateComponent } from './working-date/working-date.component';


const routes: Routes = [
    {path: 'paramater-config',component: ParameterConfigComponent},
    {path: 'calendar-management',component: CalendarManagementComponent},
    {path: 'working-date',component: WorkingDateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigManagementRoutingModule { }
