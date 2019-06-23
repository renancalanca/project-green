import { UserModel } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel();
  registerForm: FormGroup;
  hide: true;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'email': [this.user.email, Validators.compose([Validators.required, Validators.email])],
      'password': [this.user.password, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onRegister(value) {
    this.userService.doRegister(value)
    .then(res => {
      alert('Cadastro realizado com sucesso.');
      this.router.navigate(['maps']);
    }, err => {
      if (err.message == 'The email address is already in use by another account.') {
        alert('O endereço de email já está em uso.');
      }
    });
  }
}
