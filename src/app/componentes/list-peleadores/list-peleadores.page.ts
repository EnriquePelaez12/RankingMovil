import { Component, OnInit } from '@angular/core';
import { AlumnoInterface } from '../../models/alumno';
import { DataApiService } from '../../servicios/data-api.service';


@Component({
  selector: 'app-list-peleadores',
  templateUrl: './list-peleadores.page.html',
  styleUrls: ['./list-peleadores.page.scss'],
})
export class ListPeleadoresPage implements OnInit {

  constructor(private dataApi: DataApiService) { }
 
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
 

 
 }
 