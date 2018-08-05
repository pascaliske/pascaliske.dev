import { Action } from '@ngrx/store'
import { ofType } from '@ngrx/effects'
import { Observable, ObservableInput, pipe, of } from 'rxjs'
import { map, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators'

type ActionCallback<A, R> = (action: A) => ObservableInput<R>
type ActionCallbackWithState<A, S, R> = ([action, state]: [A, S]) => ObservableInput<R>

export function fromActionType<A = Action, R = any>(type, callback: ActionCallback<A, R>)
export function fromActionType<A = Action, S = any, R = any>(
    type,
    observable: Observable<S>,
    callback: ActionCallbackWithState<A, S, R>,
)
export function fromActionType<A = Action, S = any, R = any>(
    type,
    observableOrCallback: Observable<S> | ActionCallback<A, R>,
    callback?: ActionCallbackWithState<A, S, R>,
) {
    if (typeof observableOrCallback === 'function') {
        return pipe(
            ofType(type),
            exhaustMap<A | Action, R>(observableOrCallback),
        )
    }

    return pipe(
        ofType(type),
        withLatestFrom(observableOrCallback),
        exhaustMap<[A | Action, S], R>(callback),
    )
}

/**
 * Simplifies success and error callbacks for ngrx effect api calls.
 *
 * @param {(value: A) => R} success
 * @param {(error: Error) => Action} error
 */
export function handleResponse<A = Action, R = any>(
    success: (value: A) => R,
    error: (error: Error) => Action,
) {
    return pipe(
        map<A, R>(success),
        catchError(err => of(error(err))),
    )
}
