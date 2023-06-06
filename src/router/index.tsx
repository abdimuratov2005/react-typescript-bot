import Login from "../pages/Login"
import Shop from "../pages/Shop"

export const enum RoutesNames {
  UNREGISTERED = '/login',
  REGISTERED = '/shop'
}

export interface IRoute {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export const registered:IRoute[] = [
  { path: RoutesNames.REGISTERED, component: Shop }
]

export const unregistered:IRoute[] = [
  { path: RoutesNames.UNREGISTERED, component: Login }
]