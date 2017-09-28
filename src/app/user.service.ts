import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.users = database.list('data/users');
  }

  addUser(newUser) {
    this.users.push(newUser)
  }

  getUserById(userId: string) {
    return this.database.object('users/' + userId)
  }

  updateUser(localUpdatedUser) {
    let userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryInFirebase.update({name: localUpdatedUser.name,
                                location: localUpdatedUser.location});

  }

  deleteUser(localUserToDelete) {
    let userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }

}
