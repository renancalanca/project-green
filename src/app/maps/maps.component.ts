import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {SkateModel} from '../models/skate.models';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: any;
  lng: any;
  zoom = 15;
  skates: SkateModel[] = [];
  icon = '../images/icons8-cor-96.png';

  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  mapClicked($event: MouseEvent) {
    console.log('cliquei');
    this.skates.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });

    console.log(this.skates);
  }
}
