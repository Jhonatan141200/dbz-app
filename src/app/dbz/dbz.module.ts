import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MainPageComponent } from './pages/main-page.component';
import { PersonajesListComponent } from './components/list/personajes-list.component';
import { PersonajesComponent } from './components/personajes/personajes.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesListComponent,
    PersonajesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]

})
export class DbzModule {

}
