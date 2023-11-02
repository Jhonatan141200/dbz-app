import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent {
  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: "Trunks",
    power: 7000
  }];

  @Output()
  public idCharacterEmit: EventEmitter<string> = new EventEmitter();

  public emitId(id: string): void {
    this.idCharacterEmit.emit(id);
  }


}
