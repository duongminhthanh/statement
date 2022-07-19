import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { UiRoutingModule } from './ui-routing.module';

// tslint:disable-next-line: max-line-length
import { NgbDropdownModule, NgbTabsetModule, NgbAccordionModule, NgbCollapseModule, NgbModalModule, NgbProgressbarModule, NgbAlertModule, NgbToastModule, NgbPopoverModule, NgbTooltipModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { PortletsComponent } from './portlets/portlets.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalsComponent } from './modals/modals.component';
import { ProgressComponent } from './progress/progress.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { GeneraluiComponent } from './generalui/generalui.component';
import { TypographyComponent } from './typography/typography.component';
import { GridComponent } from './grid/grid.component';
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    ButtonsComponent, 
    CardsComponent, 
    PortletsComponent, 
    TabsComponent, 
    ModalsComponent, 
    ProgressComponent, 
    NotificationsComponent, 
    RibbonsComponent, 
    SpinnersComponent, 
    GeneraluiComponent, 
    TypographyComponent, 
    GridComponent,
    PreloaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIModule,
    UiRoutingModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPopoverModule,
    NgbTooltipModule,
    NgbPaginationModule
  ]
})

export class UiModule { }
