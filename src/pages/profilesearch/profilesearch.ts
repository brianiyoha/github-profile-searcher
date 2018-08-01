import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the ProfilesearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'profile'
})
@Component({
  selector: 'page-profilesearch',
  templateUrl: 'profilesearch.html',
})
export class ProfilesearchPage {
username: string;
  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesearchPage');
  }

  getUserInfo(): void{
    this.navCtrl.push('ProfileSearchResultPage',{username: this.username});
  }

}
