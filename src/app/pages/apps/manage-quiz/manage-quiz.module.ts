import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageQuizRoutingModule } from './manage-quiz-routing.module';
import { ManageQuizComponent } from './manage-quiz.component';

import { AllQuizComponent } from './all-quiz/all-quiz.component';
import { UpcommingQuizComponent } from './upcomming-quiz/upcomming-quiz.component';


import { PageLayoutModule } from '../../../../p2p/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../p2p/components/breadcrumbs/breadcrumbs.module';
import { CustomerCreateUpdateModule } from './all-quiz/customer-create-update/customer-create-update.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from '../../../../p2p/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ScheduleQuizComponent } from './schedule-quiz/schedule-quiz.component';

@NgModule({
  declarations: [ManageQuizComponent, AllQuizComponent, UpcommingQuizComponent, ScheduleQuizComponent],
  imports: [
    ManageQuizRoutingModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    CustomerCreateUpdateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    MatButtonToggleModule
  ]
})
export class ManageQuizModule { }
