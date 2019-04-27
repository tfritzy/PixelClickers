import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageFolderPath:string = "assets/images/";
  backgroundImage:string = "background.png";

  heroes: Hero[] = [new Hero(), new Hero(), new Hero(), new Hero(), new Hero(), new Hero()];
  gold: number = 0;


}
