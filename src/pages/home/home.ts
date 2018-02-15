import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Id } from './../../models/id.interface';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';
import { Item } from './../../models/item.interface';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /* items:Array<{titulo: string, descripcion: string}>; */
  itemsRef$: AngularFireList<Item[]>;
  id: Id;

  constructor(public navCtrl: NavController, private fbDB:AngularFireDatabase  ) {

    this.itemsRef$ = this.fbDB.list('items-list');
    /* this.items = [{titulo:'El super producto 1', descripcion:'la descripcion del super producto 1'},
                  {titulo:'El super producto 2', descripcion:'la descripcion del super producto 2'},
                  {titulo:'El super producto 3', descripcion:'la descripcion del super producto 3'},];
     */
  }

  itemClicked(item){
    this.navCtrl.push(DetallePage, {titulo: item.titulo, descripcion: item.descripcion});
   
  }
  idclicked(id){
    this.navCtrl.push(LoginPage);

  }



}
