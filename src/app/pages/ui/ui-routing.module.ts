import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { PortletsComponent } from './portlets/portlets.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalsComponent } from './modals/modals.component';
import { ProgressComponent } from './progress/progress.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { GridComponent } from './grid/grid.component';
import { TypographyComponent } from './typography/typography.component';
import { GeneraluiComponent } from './generalui/generalui.component';
import { SpinnersComponent } from './spinners/spinners.component';

const routes: Routes = [
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'portlets',
        component: PortletsComponent
    },
    {
        path: 'tabs-accordions',
        component: TabsComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'progress',
        component: ProgressComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'ribbons',
        component: RibbonsComponent
    },
    {
        path: 'spinners',
        component: SpinnersComponent
    },
    {
        path: 'ui-general',
        component: GeneraluiComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'grid',
        component: GridComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiRoutingModule { }
