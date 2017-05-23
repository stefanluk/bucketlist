import { Component, OnInit } from '@angular/core';
import {ItemService} from "../providers/item.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  items: any;
  toggle: Object = {};

  constructor(private itemService: ItemService) {
    this.itemService.items.subscribe(json => {
      this.items = json;
    });
  }

  ngOnInit() {
  }

  updateItem(key, title){
    this.itemService.updateItem(key, title);
  }

  deleteItem(key: string) {
    this.itemService.deleteItem(key);
  }
}
