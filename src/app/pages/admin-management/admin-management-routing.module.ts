import { UserDemo2Component } from './user-demo2/user-demo2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentManagementComponent } from './department-management/department-management.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UnitManagementComponent } from './unit-management/unit-management.component';


const routes: Routes = [
    {
        path: 'department-management',
        component: DepartmentManagementComponent
    },
    
    {
        path: 'group-management',
        component: GroupManagementComponent
    },
    {
        path: 'user-management',
        component: UserManagementComponent
    },
    {
        path: 'user-demo2',
        component: UserDemo2Component
    },
    {
        path: 'unit-management',
        component: UnitManagementComponent
    },
    { path: 'config-management', loadChildren: () => import('./config-management/config-management.module').then(m => m.ConfigManagementModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminManagementRoutingModule { }
