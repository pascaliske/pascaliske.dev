import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable, timer } from 'rxjs'

@Injectable()
export class RouteResolver implements Resolve<any> {
    public constructor() {}

    public resolve(): Observable<any> {
        return timer(50)
    }
}
