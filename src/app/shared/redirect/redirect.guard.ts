import { CanActivateFn, ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from '@angular/router'

export function RedirectGuardFn(target: string[]): CanActivateFn {
    return (route: ActivatedRouteSnapshot) => createUrlTreeFromSnapshot(route, target)
}
