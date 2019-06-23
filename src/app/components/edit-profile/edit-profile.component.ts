import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserModel } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  confPassword: String;
  user: UserModel = new UserModel();
  editForm: FormGroup;
  hide: true;
  hideconf: true;
  isAuthenticated: firebase.User;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.startForm();
    this.getUser();
  }

  startForm() {
    this.editForm = this.formBuilder.group({
      password: [
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      confPassword: [
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  getUser() {
    this.userService.getLoggedUser().subscribe(user => {
      this.isAuthenticated = user;
    });
  }

  onEdit(value) {
    if (value.password == value.confPassword) {
      this.userService.updatePassword(this.isAuthenticated, this.confPassword).then(
        this.router.navigate(['maps']);
      );
    } else {
      alert('As senhas digitadas não são iguais.');
    }
  }

  onDelete() {
    console.log('vish');
    
  }
}
