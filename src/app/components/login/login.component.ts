import { UserModel } from './../../models/user.model';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: firebase.User;
  user: UserModel = new UserModel();
  loginForm: FormGroup;
  hide: true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.startForm();
  }

  startForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        this.user.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  loginGoogle() {
    this.userService.googleAuthenticate().then(data => {
      this.router.navigate(['maps']);
    });
  }

  onLogin(value) {
    this.userService
      .emailAndPasswordLogin(value.email, value.password)
      .then(data => {
        this.router.navigate(['maps']);
      });
  }

  passwordReset() {
    this.router.navigate(['password-reset']);
  }

  register() {
    this.router.navigate(['register']);
  }
}
