import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  email: String;
  resetForm: FormGroup;
  hide: true;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      'email': [this.email, Validators.compose([Validators.required, Validators.email])],
    });
  }

  onReset(value) {
    this.userService.passwordReset(value.email);
  }
}
