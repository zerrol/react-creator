import { startsWith } from "lodash-es"

class RouteUtils {
  /**
   * 路由路径是不是一级路由的子路由 （只判断一级路由）
   * @param topLevelPath 一级路由
   * @param childPath 子路由
   */
  isTopLevelRouteChild(topLevelPath: string, childPath: string) {
    return startsWith(childPath, `${topLevelPath}/`)
  }
}
export default new RouteUtils()
