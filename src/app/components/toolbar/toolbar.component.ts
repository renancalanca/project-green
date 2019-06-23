import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isAuthenticated: firebase.User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getLoggedUser()
    .subscribe( user => {
      this.isAuthenticated = user;
    });
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
