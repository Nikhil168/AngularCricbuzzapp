import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
  
  team1Name: String;
  team2Name: String;
  toss:      String;
  decision:  number;
  over:      number;
  
  
  constructor(private matchService: MatchService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
  }
  
  defineTeams(overElement:HTMLInputElement) {
    const overs = +overElement.value;
    if( overs < 10 || overs > 50) {
      console.log('Over Must be Between 10 to 50');
      return;
    }
    this.matchService.getMatch().setTeamName(this.team1Name, this.team2Name);
    this.matchService.getMatch().setToss(this.toss, this.decision);
    this.matchService.getMatch().setOvers(this.over);
    this.matchService.setMatchState();
    this.router.navigate(['admin/define-teams']);
  }
  
  clearSearch() {
    this.team1Name = null;
    this.team2Name = null;
    this.toss = null;
    this.decision = null;
    this.over = null;
    
  }
}
