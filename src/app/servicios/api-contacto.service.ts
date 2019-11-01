import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoInterface } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ApiContactoService {

 
  constructor(
    private afs: AngularFirestore
  ) { 
    this.contactosCollection = afs.collection<ContactoInterface>('contactos');
    this.contactos = this.contactosCollection.valueChanges();
  }

  //propiedades
  private contactosCollection: AngularFirestoreCollection<ContactoInterface>;
  private contactos: Observable<ContactoInterface[]>;
  private contactoDoc: AngularFirestoreDocument<ContactoInterface>;
  private contacto: Observable<ContactoInterface>;
  public selectedContacto: ContactoInterface = {id: null};
  

    
//metodo para obtener datos de peleadores
getAllContactos() {
  // this.contactosCollection = this.afs.collection<ContactoInterface>('contactos');
  return this.contactos = this.contactosCollection.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action =>{
      const data = action.payload.doc.data() as ContactoInterface;
      data.id = action.payload.doc.id;
      return data;
    });
  }));
}

 //metodo para cachar el id en firebase
 getOneContacto(idContacto: string) {
  this.contactoDoc = this.afs.doc<ContactoInterface>(`contactos/${idContacto}`);
  return this.contacto = this.contactoDoc.snapshotChanges().pipe(map(action => {
    if (action.payload.exists === false) {
      return null;
    } else {
      const data = action.payload.data() as ContactoInterface;
      data.id = action.payload.id;
      return data;
    }
  }));
}


  //metodo para añadir contacto
  addContacto(contacto: ContactoInterface): void{
    this.contactosCollection.add(contacto);
  }
  
  //metodo para eliminar contacto
  deleteContacto(idContacto: string): void{
    this.contactoDoc = this.afs.doc<ContactoInterface>(`contactos/${idContacto}`);
    this.contactoDoc.delete();
   }
   

}
