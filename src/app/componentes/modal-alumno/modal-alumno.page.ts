import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';
import { AlumnoInterface } from '../../models/alumno';
// import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.page.html',
  styleUrls: ['./modal-alumno.page.scss'],
})
export class ModalAlumnoPage implements OnInit {

  alumno: AlumnoInterface= {
    matricula: '',
    nombreC: '',
    direccion: '',
    sexo: ''
  };
  
  idAlumno = null;

  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) { }
  @Input() userUid: string;



  ngOnInit() {

    this.idAlumno = this.route.snapshot.params['id']// se optiene el ide de nuestro alumno
    if(this.idAlumno){
      this.loadAlumno();
    }
    }

    async loadAlumno() {
      const loading = await this.loadingController.create({
        message: 'Cargando...'
      });
      await loading.present();
      this.dataApi.getOneAlumno(this.idAlumno).subscribe(res => {
        loading.dismiss();
        this.alumno = res;
      })
    }
    async saveAlumno(){
        const loading = await this.loadingController.create({
          message: 'Cargando..'
        });
        await loading.present();

        if(this.idAlumno){
          //update
          this.dataApi.updateAlumno(this.alumno, this.idAlumno).then(() => {
            loading.dismiss();
           this.nav.navigateForward('alumno'); //Es la ruta a la que quieres que te lleve despues de hacer las operaciones 
          });
        }else{
          //Add new
         // this.alumno.userUid = this.userUid;
          this.dataApi.addAlumno(this.alumno).then(() => {
            loading.dismiss();
          this.nav.navigateForward('/alumno');
          });
        }
      }
    }
  
  
