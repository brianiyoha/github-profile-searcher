import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import{User} from '../../models/user.interface';
import{Repository} from '../../models/repository.interface';

import{USER_LIST} from '../../mocks/user.mocks';
import{REPOSITORY_LIST} from '../../mocks/repository.mocks';
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = 'https://api.github.com/users';
  private repoUrl: string = 'repos';

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

getUserInfo(username:string):Observable<User>{
return this.http.get(`${this.baseUrl}/${username}`)
.do(this.logData)
.map(this.extractData)
.do(this.logData)
.catch(this.handleError);
}



getRepoInfo(username: string): Observable<Repository[]> {
  return this.http.get(`${this.baseUrl}/${username}/${this.repoUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError);
}

/*
Finding the username from within USER_LIST, equal to the username passed in
Return the resuls as an Observable
*/
mockGetUserInfo(username: string): Observable<User>{
  return Observable.of(USER_LIST.filter(user=>
    user.name===username)[0]);
}

/*
Finding the repository from within REPSOITORY_LIST, equal to the username passed in
Return the resuls as an Observable
*/
mockGetRepoInfo(username: string): Observable<Repository[]>{
  return Observable.of(REPOSITORY_LIST.filter(repository=>
    repository.owner.name===username
  ));

}

private handleError(error: Response | any){
  return Observable.throw(error.json().error || "Server Error.");
}
private extractData(response: Response){
  return response.json();
}
private logData(response: Response){
  console.log(response);
}
}
