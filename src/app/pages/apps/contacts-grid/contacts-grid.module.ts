import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsGridRoutingModule } from './contacts-grid-routing.module';
import { ContactsGridComponent } from './contacts-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactsCardModule } from './components/contacts-card/contacts-card.module';
import { ContainerModule } from '../../../../p2p/directives/container/container.module';


@NgModule({
  declarations: [ContactsGridComponent],
  imports: [
    CommonModule,
    ContactsGridRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    ContactsCardModule,
    ContainerModule
  ]
})
export class ContactsGridModule {
}
