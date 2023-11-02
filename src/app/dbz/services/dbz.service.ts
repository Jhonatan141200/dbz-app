import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Character } from "../interface/character.interface";


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() {  }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Freezer',
      power: 20000
    },
    {
      id: uuid(),
      name: 'Picollo',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 12000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 24000
    },
    {
      id: uuid(),
      name: 'Goten',
      power: 30000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 30000
    }
  ];

  public addCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }
  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
