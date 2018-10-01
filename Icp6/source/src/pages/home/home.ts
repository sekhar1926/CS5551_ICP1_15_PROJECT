import { Component } from '@angular/core';
import { AboutPage } from '../about/about'; 
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  

  }
    goToOtherPage() {
    
    this.navCtrl.push(AboutPage);
  }
}
