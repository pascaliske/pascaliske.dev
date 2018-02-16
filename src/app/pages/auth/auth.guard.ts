import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

import { AuthService } from '../../services/auth/auth.service'

/**
 * Injectable router guard for checking if an user is allowed to visit a page.
 *
 * - use it as `canActivate: [AuthGuard]`
 */
@Injectable()
export class AuthGuard implements CanActivate {
    /**
     * Initializes the guard.
     *
     * @returns {AuthGuard}
     */
    public constructor(private router: Router, private authService: AuthService) {}

    /**
     * Checks if a user is currently signed in.
     *
     * @returns {Observable<boolean>|Promise<boolean>|boolean}
     */
    public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isSignedIn().do(allowed => {
            if (!allowed) {
                this.router.navigate(['/auth/signin'])
            }
        })
    }
}
