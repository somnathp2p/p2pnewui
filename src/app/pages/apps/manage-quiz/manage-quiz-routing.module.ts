import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageQuizComponent } from "./manage-quiz.component";
import { AllQuizComponent } from "./all-quiz/all-quiz.component";
import { UpcommingQuizComponent } from "./upcomming-quiz/upcomming-quiz.component";
import { ScheduleQuizComponent } from './schedule-quiz/schedule-quiz.component';


const routes: Routes = [
  { path: "", component: ManageQuizComponent },
  { path: "all", component: AllQuizComponent },
  { path: "active", component: UpcommingQuizComponent },
  { path: "schedule-quiz/:id", component: ScheduleQuizComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageQuizRoutingModule {}
