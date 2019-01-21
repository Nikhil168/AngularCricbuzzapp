import { Player } from './Player';

export class Team {

   players: Array<Player> = [];
   constructor() {
    for (let index = 0; index < 11 ; index++) {
      const playerscons = new Player();
      this.players.push(playerscons);
    }
   }

  isTeamComplete(): boolean {
    if (this.players.length === 11) {
      return true;
    }
    return false;
  }
  getPlayers() {
   return this.players;
  }
}
