import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq.component';
import { P2pRoutes } from '../../../../p2p/interfaces/p2p-route.interface';


const routes: P2pRoutes = [
  {
    path: '',
    component: FaqComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {
}
