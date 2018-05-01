import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from "../index.paginas";

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes: any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar Mentes"
    },
    {
      nombre: "Wolverine",
      poder: "Regenracion"
    },
    {
      nombre: "Profesor x",
      poder: "Poderes mentales"
    }
  ];

  pagina3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pagina3 = Pagina3Page;
  }

  irPagina3(mutante: any) {
    this.navCtrl.push(Pagina3Page, { mutante })
  }
}
