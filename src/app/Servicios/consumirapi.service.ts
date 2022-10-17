import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
@Injectable({
  providedIn: 'root'

})
export class ConsumirapiService {

  constructor(private http:HttpClient) {

    console.log('servicio HTTP: ' );
   }

   getapi(): any {

    return this.http.get( 'https://breakingbadapi.com/api/characters');


   }

}
