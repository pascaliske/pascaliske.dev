import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable()
export class AuthService {
    public constructor(private angularFire: AngularFireAuth) {}

    public signin(email: string, password: string): Promise<any> {
        return this.angularFire.auth
            .signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result)
            })
    }

    public signout(): Promise<any> {
        return this.angularFire.auth.signOut()
    }
}
