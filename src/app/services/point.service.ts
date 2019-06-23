import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { PointModel } from '../models/point.model';

@Injectable({
  providedIn: 'root'
})

export class PointService {

  constructor(private db: AngularFireDatabase) { }

  public point: PointModel;

  getPoints() {
    return this.db.list('point')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  addPoints(point: PointModel): boolean {
    this.db.list('point').push(point)
      .then((result: any) => {
        return true;
      }).catch((error: any) => {
        return false;
      });

    return true;
  }

  deletePoints(point: PointModel) {
    this.db.object(`point/${point.key}`).remove();
  }

  editPoints(point: PointModel) {
    this.db.object(`point/${point.key}`).update(point)
      .then((result: any) => {
        return true;
      }).catch((error: any) => {
        return false;
      });

    return true;
  }

}
