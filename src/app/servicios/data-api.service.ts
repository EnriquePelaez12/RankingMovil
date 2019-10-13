import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlumnoInterface } from '../models/alumno';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

    //propiedades
    private alumnosCollection: AngularFirestoreCollection<AlumnoInterface>;
    private alumnos: Observable<AlumnoInterface[]>;
    private alumnoDoc: AngularFirestoreDocument<AlumnoInterface>;
    private alumno: Observable<AlumnoInterface>;
    public selectedAlumno: AlumnoInterface = {id: null};//es para el modal
   

   constructor( private afs: AngularFirestore) {
      this.alumnosCollection = afs.collection<AlumnoInterface>('alumnos');
      this.alumnos = this.alumnosCollection.valueChanges();
    }
    
  getAllAlumno(){
    //this.alumnosCollection = this.afs.collection<AlumnoInterface>('alumnos');
    return this.alumnos = this.alumnosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action =>{
        const data = action.payload.doc.data() as AlumnoInterface;// sacamos el id del documento
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  //metodo para cachar el id en firebase
  getOneAlumno(idAlumno: string){
    this.alumnoDoc = this.afs.doc<AlumnoInterface>(`alumnos/${idAlumno}`);//va a la coleccion de libros y busca la ruta que le pasemos
    return this.alumno = this.alumnoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as AlumnoInterface;
        data.id = action.payload.id;
        return data;
      }
    }));

  }

  //metodo para añadir libro
  addAlumno(alumno: AlumnoInterface){
    return this.alumnosCollection.add(alumno);
  }
   //metodo para actualizar
  updateAlumno(alumno: AlumnoInterface, id: string) {
    return this.alumnosCollection.doc(id).update(alumno);
    // return  this.alumnoDoc = this.afs.doc<AlumnoInterface>(`alumnos/${idAlumno}`);
    //  this.alumnoDoc.update(alumno);
  }


  //metodo para eliminar
  deleteAlumno(idAlumno: string): void{
    this.alumnoDoc = this.afs.doc<AlumnoInterface>(`alumnos/${idAlumno}`);
    this.alumnoDoc.delete();
  }


}


