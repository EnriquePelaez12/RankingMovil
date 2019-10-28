import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {UserInterface } from './../models/user';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService { constructor(
  private afsAuth: AngularFireAuth,
  private afs: AngularFirestore,
  private router : Router
) { }


 
//para registar usuarios
registerUser(email: string, pass: string ){
  return new Promise((resolve, reject) => {
    this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
    .then(userData => {
      resolve(userData),
      this.updateUserData(userData.user)//se asigna rol a usuario
    }).catch(err => console.log(reject(err)))
  });
}

  //metodo para registrar por usuario y contraseña
  loginEmailUser(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),

      err => reject(err));
    })

  }

  //metodo para salir
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }


  //metodo para saber si nuestro usuariesta logado
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  //metodo para asignar el rol que le corresponde a cada usuario
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
       editor: true
        // admin: true
      }
    }
    return userRef.set(data, { merge: true })//se guarda en la coleccion
  }
  //nos devuelve el documento que corresponde al id de los roles
  isUSerAdmin(userUid){
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
}
