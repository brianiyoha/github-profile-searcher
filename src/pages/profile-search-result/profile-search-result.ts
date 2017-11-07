import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { GithubServiceProvider} from '../../providers/github-service/github.service';
import {User} from '../../models/user.interface';
import {Repository} from '../../models/repository.interface';

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
   segment: 'profile/result/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
user:User;
err:string;
repositories:Repository[];
username: string;
  constructor(private github: GithubServiceProvider,private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    if(this.username){
      this.getUserInfo();
    }
    console.log('ionViewDidLoad ProfileSearchResultPage');
  }
getUserInfo():void{

    this.github.getUserInfo(this.username)
  .subscribe((data : User)=>{
this.user=data;    
    }, 
    err => {
       this.err=("User Not Found Ensure You Enter User's username not FULL NAME");
      //console.log(this.err);          
      });

   this.github.getRepoInfo(this.username)
    .subscribe((data: Repository[]) => {
       this.repositories = data;
     },
     err => {
       console.log("User Not Found Ensure You Enter User's username not FULL NAME");
       //console.log(this.err);          
     });

//   this.github.mockGetUserInfo(this.username)
//   .subscribe((data : User)=>{
// this.user=data;    
//   });

//   this.github.mockGetRepoInfo(this.username)
//     .subscribe((data: Repository[]) => {
//       this.repositories = data;
//     });
}

}
