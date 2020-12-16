import { Directive } from '@angular/core';

@Directive({
  selector: '[p2pPageLayoutHeader],p2p-page-layout-header',
  host: {
    class: 'p2p-page-layout-header'
  }
})
export class PageLayoutHeaderDirective {

  constructor() { }

}

