import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent implements OnInit {
  @Input() player: Player;
  @Input() index: number;
  
  constructor() { }
  
  ngOnInit() {
  }
  setName (event ) {
    const element : HTMLInputElement = event.target;
    this.player.setPlayers(element.value);
    
  }
  
}
