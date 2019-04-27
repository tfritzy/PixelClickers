import { Upgrade } from "./upgrade";

export class Hero {
    damage: number;
    cost: number;
    name: string;
    upgrades: Object[];

    constructor(){
        this.damage = 10;
        this.cost = 100;
        this.name = "Aphrodite";
        this.upgrades = [new Upgrade(), new Upgrade(), new Upgrade(), new Upgrade()];
    }
}
