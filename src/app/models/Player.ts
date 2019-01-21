import { Batting } from './Batting';
import { Balling } from './Balling';

export class Player {
  name: string;
  batting: Batting;
  balling: Balling;

  constructor() {
    this.batting = new Batting();
    this.balling = new Balling();
  }
  setPlayers(name: string) {
    this.name = name;
    console.log(this.name);
  }

  getPlayerName() {
    return this.name;
  }
}
