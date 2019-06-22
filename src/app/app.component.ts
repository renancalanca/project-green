import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project Green';

  private isLoggedIn: Boolean;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.userService.getLoggedUser()
    .subscribe((auth) => {
      if (auth == null) {
        // not logged
        this.isLoggedIn = false;
        this.router.navigate(['login']);
      } else {
        // logged in
        this.isLoggedIn = true;
        this.router.navigate(['maps']);
      }
    });
  }

  ngOnInit() {
  }

}
