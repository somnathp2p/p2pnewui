import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewQuizComponent } from './add-new-quiz.component';

const routes: Routes = [{ path: '', component: AddNewQuizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewQuizRoutingModule { }
