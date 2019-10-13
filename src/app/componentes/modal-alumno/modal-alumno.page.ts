import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
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

  //propiedad
  // public alumno: AlumnoInterface= {};


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
            // this.nav.navigateForward('/detail-alumno, alumno.id');
          });
        }else{
          //Add new
          this.dataApi.addAlumno(this.idAlumno).then(() => {
            loading.dismiss();
            // this.nav.navigateForward('/detail-alumno, alumno.id');
          });
        }
      }
    }
  
  

    // const idAlumno = this.route.snapshot.params['id'];
  //   // this.getDetails(idAlumno);
  //   // this.onSaveAlumno(idAlumno)
  // }


  // onSaveAlumno(alumnForm: NgForm): void{
  //   // console.log('alumnForm.value.id', alumnForm.value.id)
  //    if(alumnForm.value.id == null){
  //    //new 
  //    this.dataApi.addAlumno(alumnForm.value);
  //    }else{
  //    //update  
  //    this.dataApi.updateAlumno(alumnForm.value);
  //    }
  //    alumnForm.resetForm();
  //   //  this.btnClose.nativeElement.click();
 
  //  }

  //   //metodo para saber el id
  // getDetails(idAlumno: string): void {
  //   this.dataApi.getOneAlumno(idAlumno).subscribe(alumno => {
  //     this.alumno = alumno;
  //   });
  // }

// }
