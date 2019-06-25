import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PointModel } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-insert-point',
  templateUrl: './insert-point.component.html',
  styleUrls: ['./insert-point.component.css']
})

export class InsertPointComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private servicePoint: PointService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      local: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      capacidade: ['', Validators.required]
    });
  }

  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.invalid) {
        return;
    }

    const point = new PointModel(
      this.addForm.value.latitude,
      this.addForm.value.longitude,
      this.addForm.value.capacidade,
      this.addForm.value.local
    );

    const r = this.servicePoint.addPoints(point);

    if (r) {
      alert('Ponto cadastrado com sucesso.');
      this.router.navigate(['maps']);
    }
  }

  return() {
    this.router.navigate(['maps']);
  }

}
