import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  nombre = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
