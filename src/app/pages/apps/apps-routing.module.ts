import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { CompaniesComponent } from './companies/companies.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TeammembersComponent } from './teammembers/teammembers.component';

const routes: Routes = [
    {
        path: 'kanbanboard',
        component: KanbanboardComponent
    },
    {
        path: 'companies',
        component: CompaniesComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'file-manager',
        component: FilemanagerComponent
    },
    {
        path: 'tickets',
        component: TicketsComponent
    },
    {
        path: 'team-members',
        component: TeammembersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
