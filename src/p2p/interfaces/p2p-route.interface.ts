import { Route } from '@angular/router';

export interface P2pRouteData {
  scrollDisabled?: boolean;
  toolbarShadowEnabled?: boolean;
  containerEnabled?: boolean;

  [key: string]: any;
}

export interface P2pRoute extends Route {
  data?: P2pRouteData;
  children?: P2pRoute[];
}

export type P2pRoutes = P2pRoute[];
