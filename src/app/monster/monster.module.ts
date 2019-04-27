import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MonsterComponent } from './monster.component';

@NgModule({
  declarations: [
    MonsterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MonsterComponent],
  exports: [MonsterComponent]
})
export class MonsterModule { }
