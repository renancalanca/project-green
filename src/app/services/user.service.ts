import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afAuth: AngularFireAuth) {}

  getLoggedUser() {
    return this.afAuth.authState;
  }

  googleAuthenticate() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
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

  updatePassword(user: firebase.User, confPassword) {
    user
      .updatePassword(confPassword)
      .then(function() {
        alert('Senha alterada com sucesso.');
        // this.userReauthenticate(user.email, confPassword);
      })
      .catch(function() {
        alert('Erro ao alterar a senha.');
      });
  }

  emailAndPasswordLogin(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          res => {},
          err => {
            if (
              err ==
              'Error: The password is invalid or the user does not have a password.'
            ) {
              alert('A senha é inválida ou o modo de autenticação utilizado por este e-mail não existe.');
            } else if (
              err.message ==
              'There is no user record corresponding to this identifier. The user may have been deleted.'
            ) {
              alert('E-mail não encontrado.');
            }
          }
        );
    });
  }

  onSelfDelete(user) {
    user
      .delete()
      .then(function() {
        alert('Usuário excluído com sucesso.');
      })
      .catch(function(error) {
        alert('Erro durante a exclusão do usuário.');
      });
  }
}
