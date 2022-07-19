import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcManagementComponent } from './abc-management/abc-management.component';
import { BrokerConfirmationComponent } from './broker-confirmation/broker-confirmation.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'extras', loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'adminUI', loadChildren: () => import('./adminUI/adminUI.module').then(m => m.AdminUIModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'chart', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'broker-confirmation', component: BrokerConfirmationComponent },
  { path: 'administration', loadChildren: () => import('./admin-management/admin-management.module').then(m => m.AdminManagementModule) },
  { path: 'system-definition', loadChildren: () => import('./system-definition/system-definition.module').then(m => m.SystemDefinitionModule) },
  { path: 'import-management', loadChildren: () => import('./import-management/import.module').then(m => m.ImportModule) },
  { path: 'mapping-management', loadChildren: () => import('./mapping-management/mapping.module').then(m => m.MappingModule) },
  { path: 'report-management', loadChildren: () => import('./report-management/report.module').then(m => m.ReportModule) },
  { path: 'data-management', loadChildren: () => import('./data-management/data.module').then(m => m.DataModule) },
  { path: 'batch-management', loadChildren: () => import('./batch-management/batch-management.module').then(m => m.BatchManagementModule)},
  { path: 'abc-management', component: AbcManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
