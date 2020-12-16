import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsGridComponent } from './contacts-grid.component';
import { P2pRoutes } from '../../../../p2p/interfaces/p2p-route.interface';


const routes: P2pRoutes = [
  {
    path: '',
    redirectTo: 'all'
  },
  {
    path: ':activeCategory',
    component: ContactsGridComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsGridRoutingModule {
}
