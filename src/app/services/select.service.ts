import { Injectable } from '@angular/core';
import { Country } from '../model/country';


@Injectable({
  providedIn: 'root'
})
export class SelectService {

  Countries: Country[] = [
    { name: 'India', states: ['TamilNadu','Kerala','Karnataka','Telungana'] },
		{ name: 'Germany', states: ['Wiesbaden', 'Mecklenburg-Vorpommern', 'Niedersachsen'] },
		{ name: 'Spain', states: ['Andalusia','Aragon'] },
		{ name: 'USA', states: ['Alabama','Alaska','Arizona'] },
		{ name: 'Mexico', states: ['Puebla'] }
		
	];

  constructor() { }

  getCtryState(){return this.Countries;}
}
