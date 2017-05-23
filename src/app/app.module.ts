import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from "angularfire2/auth/auth.module";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";

import {AuthService} from "./providers/auth.service";
import {ItemService} from "./providers/item.service";

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddItemComponent } from './add-item/add-item.component';


export const firebaseConfig = {
  apiKey: "AIzaSyA2JHAfHXZ7T5cYWwohy_2a9UnOgYkT_Eo",
  authDomain: "mybucketlist-59fc7.firebaseapp.com",
  databaseURL: "https://mybucketlist-59fc7.firebaseio.com",
  projectId: "mybucketlist-59fc7",
  storageBucket: "mybucketlist-59fc7.appspot.com",
  messagingSenderId: "449401865793"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
