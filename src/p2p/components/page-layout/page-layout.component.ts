import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'p2p-page-layout',
  template: '<ng-content></ng-content>',
  host: {
    class: 'p2p-page-layout'
  },
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {

  @Input() mode: 'card' | 'simple' = 'simple';

  constructor() { }

  @HostBinding('class.p2p-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.p2p-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }

}
