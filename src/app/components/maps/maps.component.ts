import { Component, OnInit } from '@angular/core';
import { PointService } from 'src/app/services/point.service';
import { PointModel } from 'src/app/models/point.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: any;
  lng: any;
  zoom = 15;
  stations: Array<PointModel> = [];
  icon = '../images/icons8-cor-96.png';

  constructor(private pointService: PointService, private router: Router) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = -47.05382886341033;
        this.lat = -22.875586374502863;
      });
    }
    this.getPoints();
  }

  private getPoints() {
    this.pointService.getPoints().subscribe((data: Array<PointModel>) => {
      this.stations = data;
    });
  }

  public newPoint() {
    this.router.navigate(['insert-point']);
  }
}
