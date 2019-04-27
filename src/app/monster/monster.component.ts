import { Component } from '@angular/core';

@Component({
    selector: 'monster',
    templateUrl: './monster.component.html',
    styleUrls: ['./monster.component.css']
  })
export class MonsterComponent {

    startingHealth: number;
    health: number;
    imgPath:string;
    imgFileName:string;

    constructor(){
        this.startingHealth = 10;
        this.health = this.startingHealth;
        this.imgPath = "assets/images/monsters/";
        this.imgFileName = "blob.png";
    }

    attack(){
        this.health -= 1;
        if (this.health <= 0){
            this.health = this.startingHealth;
        }
        console.log(this.health);
    }

    getHealthPercentage():string {
        return "20%";
    }
}
