import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap'

/**
 * Interface describing a authenticated user.
 */
export interface User {
    uid: string
    email: string
}

/**
 * Injectable service to handling all auth specific tasks.
 *
 * - use the `signin` and `signout` methods
 * - access the current user with the `user` property
 */
@Injectable()
export class AuthService {
    /**
     * The current user object.
     *
     * @param {Observable<user>} user
     */
    public user: Observable<User>

    /**
     * Initializes the auth service.
     *
     * @param {AngularFireAuth} auth
     * @returns {AuthService}
     */
    public constructor(
        private router: Router,
        private auth: AngularFireAuth,
        private store: AngularFirestore
    ) {
        this.user = this.auth.authState.switchMap(user => {
            if (!user) {
                return Observable.of(null)
            }

            return this.store.doc<User>(`users/${user.uid}`).valueChanges()
        })
    }

    /**
     * Signs the user in with his email and password.
     *
     * @param {string} email
     * @param {string} password
     * @returns {Promise<User>}
     */
    public signin(email: string, password: string): Promise<User> {
        return this.auth.auth
            .signInWithEmailAndPassword(email, password)
            .then(user => this.persistUserData(user))
    }

    /**
     * Signs the user out.
     *
     * @returns {Promise<void>}
     */
    public signout(): Promise<void> {
        return this.auth.auth.signOut()
    }

    /**
     * Persists the user data in an firebase document.
     *
     * @param {User} user
     * @returns {User}
     */
    private persistUserData(user: User): User {
        const userRef: AngularFirestoreDocument<User> = this.store.doc(`users/${user.uid}`)
        const data: User = {
            uid: user.uid,
            email: user.email
        }

        userRef.set(data)

        return data
    }
}
