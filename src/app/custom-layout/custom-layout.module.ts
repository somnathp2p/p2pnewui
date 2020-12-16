import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../p2p/layout/layout.module';
import { CustomLayoutComponent } from './custom-layout.component';
import { SidenavModule } from '../../p2p/layout/sidenav/sidenav.module';
import { ToolbarModule } from '../../p2p/layout/toolbar/toolbar.module';
import { FooterModule } from '../../p2p/layout/footer/footer.module';
import { ConfigPanelModule } from '../../p2p/components/config-panel/config-panel.module';
import { SidebarModule } from '../../p2p/components/sidebar/sidebar.module';
import { QuickpanelModule } from '../../p2p/layout/quickpanel/quickpanel.module';


@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule
  ]
})
export class CustomLayoutModule {
}
