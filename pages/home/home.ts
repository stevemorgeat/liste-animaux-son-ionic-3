import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListanimalsPage } from '../listanimals/listanimals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // on passe par une variable le changement de page
  targetPage = ListanimalsPage;

  //constructor à l'appel de la page
  constructor(public navCtrl: NavController) {

  }

}
