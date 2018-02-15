import { Item } from './../../models/item.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NuevoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html',
})
export class NuevoPage {
    item = {} as Item;
    itemsRef$:AngularFireList<Item[]>;

  constructor(public navCtrl: NavController, private fbDB: AngularFireDatabase , public navParams: NavParams) {

    this.itemsRef$ = this.fbDB.list('items-list');
  
  }

  addItem(item: Item){
    this.itemsRef$.push({
      titulo: item.itemTitulo,
      descripcion: item.itemDescripcion
    });
    this.item= {} as Item;
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPage');
  }

}
