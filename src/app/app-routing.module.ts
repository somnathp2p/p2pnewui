import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";
import { P2pRoutes } from "../p2p/interfaces/p2p-route.interface";

const routes: P2pRoutes = [
  {
    path: "",
    component: CustomLayoutComponent,
    children: [
      {
        path: "apps",
        children: [
          {
            path: "teacher",
            loadChildren: () =>
              import("./pages/apps/teacher/teacher.module").then(
                (m) => m.TeacherModule
              ),
          },
        ],
      },
      {
        path: "manage-quiz",
        loadChildren: () =>
          import("./pages/apps/manage-quiz/manage-quiz.module").then(
            (m) => m.ManageQuizModule
          ),
      },
      {
        path: "add-new-quiz",
        loadChildren: () =>
          import("./pages/apps/add-new-quiz/add-new-quiz.module").then(
            (m) => m.AddNewQuizModule
          ),
      },
      { path: 'user', loadChildren: () => import('./pages/apps/user/user.module').then(m => m.UserModule) },
      { path: 'profile', loadChildren: () => import('./pages/apps/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'student-report', loadChildren: () => import('./pages/apps/student-report/student-report.module').then(m => m.StudentReportModule) },
      { path: 'faq', loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule) },
      { path: 'students', loadChildren: () => import('./pages/apps/contacts-grid/contacts-grid.module').then(m => m.ContactsGridModule) },
      {
        path: "**",
        loadChildren: () =>
          import("./pages/pages/errors/error-404/error-404.module").then(
            (m) => m.Error404Module
          ),
      },
    ],
  }
  
 
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "corrected",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
