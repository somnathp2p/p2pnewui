import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404.component';
import { P2pRoutes } from '../../../../../p2p/interfaces/p2p-route.interface';


const routes: P2pRoutes = [
  {
    path: '',
    component: Error404Component,
    data: {
      containerEnabled: true,
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error404RoutingModule {
}
