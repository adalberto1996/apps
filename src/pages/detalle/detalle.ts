import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
    itemTitulo: string;
    itemDescripcion: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
          this.itemTitulo = navParams.get('itemTitulo');
          this.itemDescripcion = navParams.get('itemDescripcion');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
