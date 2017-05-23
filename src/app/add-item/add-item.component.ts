import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {ItemService} from "../providers/item.service";


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addItemForm: FormGroup;
  items

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    public router:Router
  ) {
    this.itemService.items.subscribe(json => {
      this.items = json;
    })
  }

  ngOnInit() {
    this.addItemForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  addItem() {
    let title = this.addItemForm.get('title').value;
    this.itemService.addItem(title)
  }

}
