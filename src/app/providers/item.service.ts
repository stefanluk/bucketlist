import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router} from "@angular/router";

@Injectable()
export class ItemService {

  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private router: Router) {
    this.items = db.list('/items');
  }

  addItem(title) {
    this.items.push({
      title: title
    });
    this.router.navigate([''])
  }

  updateItem(key: string, item) {
    this.items.update(key, {
      title: item.newTitle
    });
  }

  deleteItem(key: string){
    this.items.remove(key);
  }

}
