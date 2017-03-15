import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = 'Xertz';

  constructor(private http:Http) {

   }

   getUser() {
     return this.http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());
   }

   getRepos() {
     return this.http.get('https://api.github.com/users/'+this.username+'/repos')
        .map(res => res.json());
   }

   updateUsername(username:string) {
     this.username = username;
   }
}
