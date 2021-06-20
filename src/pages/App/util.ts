import { routeUtils } from "@common/utils";
import { PageRouteProps } from "@router";
import { isArray, isString } from "lodash-es";

/**
 * 是否layout route
 * @param route 
 */
export function isCurrentRouteInLayout(route: PageRouteProps, pathname: string) {
  if(isArray(route.path)) {
    return route.path.some(pathString => (
      isLayoutPathInLayout(pathString, pathname, route.pageOptions?.haveDefaultLayout)
    ))
  }
  if(isString(route.path)) {
    return isLayoutPathInLayout(route.path, pathname, route.pageOptions?.haveDefaultLayout)
  }

  throw new Error('Invalid route path, it should be string or string[]')
}


function isLayoutPathInLayout(routePath: string, locationPathname: string, haveDefaultLayout: boolean | undefined) {
  return (routePath === locationPathname || routeUtils.isTopLevelRouteChild(routePath, locationPathname)) && haveDefaultLayout
}