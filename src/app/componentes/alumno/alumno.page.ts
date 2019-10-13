import { Component, OnInit } from '@angular/core';
import { AlumnoInterface } from '../../models/alumno';
import { DataApiService } from '../../servicios/data-api.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private dataApi: DataApiService) { }
  // public alumnos= [];
   //public alumno= '';
   //propiedades
  private alumnos: AlumnoInterface[];
 
 
   ngOnInit() {
  this.getListAlumnos();
   }
 
   getListAlumnos(){
     this.dataApi.getAllAlumno().subscribe(alumnos => {
       console.log('Alumnos', alumnos);
       this.alumnos = alumnos;
     });
   }
 
 
//  onDeleteAlumno(idAlumno: string): void{
//    const confirmacion = confirm('¿Estas seguro de Eliminar?')
//    if(confirmacion){
//    this.dataApi.deleteAlumno(idAlumno);
//    }
//  }
 
//  onPreUpdateAlumno(alumno: AlumnoInterface): void{
//    console.log('ALUMNOOO', alumno)
//    this.dataApi.selectedAlumno = Object.assign({}, alumno);
 
//  }
 
 }
 