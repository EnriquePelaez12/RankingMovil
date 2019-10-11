import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './servicios/auth.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Peleadores',
      url: '/list-peleadores',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private afsAuth: AngularFireAuth
  ) {
    this.initializeApp();
    this.getCurrentUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
    //propiedades
    public app_name: string = 'Raiking Amateur Mexico';
    public isLogged: boolean = false;
 

  
    //metodo para saber si el usuario esta logado
    getCurrentUser(){
      this.authService.isAuth().subscribe(auth => { 
        if(auth){
          console.log('user logged');
          this.isLogged = true;
          this.router.navigate(['/alumno']);//si esta logueado se manda a esa direccion

                } else {
                  console.log('NOT user Logged');
                  this.isLogged = false;
                }
      });
  
    }

     //metodo para salir 
  onLogout(){
    this.afsAuth.auth.signOut();
    this.router.navigate(['/home']);

  }
 
}
