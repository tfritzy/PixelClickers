import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonsterModule } from './monster/monster.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MonsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
