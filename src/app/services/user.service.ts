import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private afAuth: AngularFireAuth) {}

  googleAuthenticate() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      this.afAuth.auth.signInWithRedirect(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  getLoggedUser() {
    return this.afAuth.authState;
  }

  facebookAuthenticate() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithRedirect(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  passwordReset(email) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(
          res => {
            console.log(res);
            alert('E-mail de redefinição encaminhado.');
          },
          err => {
            console.log(err);
            alert('Este e-mail não está cadastrado no sistema.');
          }
        );
    });
  }
}
