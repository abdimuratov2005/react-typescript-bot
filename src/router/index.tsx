import Login from "../pages/Login"
import Shop from "../pages/Shop"

export const enum RoutesNames {
  UNREGISTERED = '/login',
  REGISTERED = '/shop'
}

export interface IRoute {
  path: string
  component: React.ComponentType | React.ReactNode
  exact?: boolean
}

export const registered:IRoute[] = [
  { path: RoutesNames.REGISTERED, component: Shop, exact: true }
]

export const unregistered:IRoute[] = [
  { path: RoutesNames.UNREGISTERED, component: Login, exact: true }
]