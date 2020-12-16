import { Directive } from '@angular/core';

@Directive({
  selector: '[p2pPageLayoutContent],p2p-page-layout-content',
  host: {
    class: 'p2p-page-layout-content'
  }
})
export class PageLayoutContentDirective {

  constructor() { }

}
