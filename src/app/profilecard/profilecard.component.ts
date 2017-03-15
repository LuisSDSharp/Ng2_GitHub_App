import { GithubService } from '../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: 'profilecard.component.html',
  providers: [GithubService]
})
export class ProfilecardComponent implements OnInit {
  user:any;
  repos:any;
  username:string;

  constructor(private githubService:GithubService) { }

  ngOnInit() { }

  search() {
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
