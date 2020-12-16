import { ActivatedRouteSnapshot } from '@angular/router';
import { P2pRouteData } from '../interfaces/p2p-route.interface';

export function checkRouterChildsData(route: ActivatedRouteSnapshot & { data?: P2pRouteData }, compareWith: (data: P2pRouteData) => boolean) {
  if (compareWith(route.data)) {
    return true;
  }

  if (!route.firstChild) {
    return false;
  }

  return checkRouterChildsData(route.firstChild, compareWith);
}

/**
 * Used to get params from children in their parent
 */
export function getAllParams(route: ActivatedRouteSnapshot & { data?: P2pRouteData }, result = new Map<string, string>()): Map<string, string> {
  if (route.params) {
    for (const key of Object.keys(route.params)) {
      result.set(key, route.params[key]);
    }
  }

  if (!route.firstChild) {
    return result;
  }

  return getAllParams(route.firstChild, result);
}
