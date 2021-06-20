import { RouteProps } from "react-router";

interface PageRouteProps extends RouteProps {
  pageOptions?: {
    haveAuth?: boolean,
    haveDefaultLayout?: boolean,
  }
}

export type {
  PageRouteProps
}