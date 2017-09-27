import { Injectable } from '@angular/core';
import { Bootcamp } from './bootcamp.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BootcampService {
  bootcamps: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.bootcamps = database.list('data/bootcamps');
  }

  getBootcamps() {
    return this.bootcamps;
  }

  addBootcamp(newBootcamp) {
    this.bootcamps.push(newBootcamp);
  }

  getBootcampById(bootcampId: string) {
    return this.database.object('data/bootcamps/' + bootcampId);
  }

  updateBootcamp(localUpdatedBootcamp) {
    let bootcampEntryInFirebase = this.getBootcampById(localUpdatedBootcamp.$key);
    bootcampEntryInFirebase.update({name: localUpdatedBootcamp.name,
                                    description: localUpdatedBootcamp.description,
                                    location: localUpdatedBootcamp.location,
                                    rating: localUpdatedBootcamp.rating});
  }

  deleteBootcamp(localBootcampToDelete) {
    let bootcampEntryInFirebase = this.getBootcampById(localBootcampToDelete.$key);
    bootcampEntryInFirebase.remove();
  }
}
