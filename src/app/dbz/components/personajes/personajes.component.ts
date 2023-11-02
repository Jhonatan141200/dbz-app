import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if (this.character.name.length === 0 ||
      this.character.power === null) return;
    this.onNewCharacter.emit(this.character);
    this.character = {id: '', name: '', power: 0};
  }


}
