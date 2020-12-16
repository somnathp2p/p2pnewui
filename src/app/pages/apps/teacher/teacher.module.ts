import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollbarModule } from '../../../../p2p/components/scrollbar/scrollbar.module';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IconModule } from '@visurel/iconify-angular';
import { DateTokensModule } from '../../../../p2p/pipes/date-tokens/date-tokens.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrumboardDialogModule } from './dashboard/components/scrumboard-dialog/scrumboard-dialog.module';
import { PopoverModule } from '../../../../p2p/components/popover/popover.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../p2p/directives/container/container.module';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [TeacherComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    CommonModule,
    FlexLayoutModule,
    ScrollbarModule,
    MatButtonModule,
    DragDropModule,
    IconModule,
    DateTokensModule,
    MatTooltipModule,
    ScrumboardDialogModule,
    PopoverModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ContainerModule
  ]
})
export class TeacherModule { }
