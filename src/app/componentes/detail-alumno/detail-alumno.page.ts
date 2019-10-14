import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlumnoInterface } from '../../models/alumno';
import { DataApiService } from '../../servicios/data-api.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.page.html',
  styleUrls: ['./detail-alumno.page.scss'],
})
export class DetailAlumnoPage implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute,
    private nav: NavController
  ) { }

  //propiedad
  public alumno: AlumnoInterface= {};


  ngOnInit() {
    const idAlumno = this.route.snapshot.params['id'];
    this.getDetails(idAlumno);
  }

  

  //metodo para saber el id
  getDetails(idAlumno: string): void {
    this.dataApi.getOneAlumno(idAlumno).subscribe(alumno => {
      this.alumno = alumno;
     // this.nav.navigateForward('/modal-alumno, alumno.id'); //Es la ruta a la que quieres que te lleve despues de hacer las operaciones 
    });
  }
//metodo para eliminar alumno    
  onDeleteAlumno(idAlumno: string): void{
    const confirmacion = confirm('¿Estas seguro de Eliminar?')
    if(confirmacion){
    this.dataApi.deleteAlumno(idAlumno);
    }
  }
  
  //metodo para actualizar
  onPreUpdateAlumno(alumno: AlumnoInterface): void{
    console.log('ALUMNOOO', alumno)
    this.dataApi.selectedAlumno = Object.assign({}, alumno);
  
  }


}
