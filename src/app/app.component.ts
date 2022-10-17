import { Component } from '@angular/core';

import { ConsumirapiService } from './Servicios/consumirapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consumir API';
  response: any = [];






  constructor(private ConsumirapiService: ConsumirapiService ){

    console.log('el componente se creo ');
    this.ConsumirapiService.getapi()
    .subscribe( (response: any) => console.log(response));

   }
}
