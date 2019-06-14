import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // uid = this.afAuth.authState.pipe(
  //   map(authState => {
  //     if (!authState.uid) {
  //       return null;
  //     } else {
  //       return authState.uid;
  //     }
  //   }),
  // );
  isAdmin = observableOf(true);

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabaseModule) { }

  login () {
    console.log(this.afAuth.auth);
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout () {
    this.afAuth.auth.signOut();
  }
}
