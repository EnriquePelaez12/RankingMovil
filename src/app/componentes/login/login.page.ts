import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import {Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    ) { }
    public email: string = '';
    public password: string = '';

  ngOnInit() {
  }

  onLogin(): void {
  this.authService.loginEmailUser(this.email, this.password)
    .then((res)=>{     
    this.onLoginRedirect();
  }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  //catch(err => console.log('err', err.message));
}


 //metodo para salir 
 onLogout() {
  this.authService.logoutUser();
}

onLoginRedirect(){
  this.router.navigate(['/home']);//si esta logueado se manda a esa direccion

}
}