import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interface/character.interface';


@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {  }

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  public addCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }

  public deleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }


}

