import { Component, OnInit } from '@angular/core';
import {ItemService} from "../providers/item.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  items: any;
  updateForm: FormGroup;
  toggle: Object = {};

  constructor(private itemService: ItemService, private fb: FormBuilder) {
    this.itemService.items.subscribe(json => {
      this.items = json;
      if (json != undefined){
        this.updateForm = this.fb.group({
          bucketListItems: this.initUpdateForms(),
        });
      }
    });

  }

  ngOnInit() {
  }

  initUpdateForms(){
    let bucketListItems = this.fb.array([]);

    for ( var i = 0; i < this.items.length; i++){
      bucketListItems.push(
        this.fb.group({
          newTitle: this.items[i].title,
          newDesc: 'Beschrijving'
        })
      )
    }
    return bucketListItems;
  }

  updateItem(key, title){
    this.itemService.updateItem(key, title);
  }

  deleteItem(key: string) {
    this.itemService.deleteItem(key);
  }
}
