import { Injectable } from '@angular/core';
import {SkateModel} from '../models/skate.models';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private db: AngularFireDatabase) { }

  insert(contato: SkateModel) {
    this.db.list('contato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(contato: SkateModel, key: string) {
    this.db.list('contato').update(key, contato)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('contato')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`contato/${key}`).remove();
  }
}
