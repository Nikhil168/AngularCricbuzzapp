import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/Match';

@Component({
  selector: 'app-innings',
  templateUrl: './innings.component.html',
  styleUrls: ['./innings.component.css']
})
export class InningsComponent implements OnInit {
  
  onStrikeBatsmanName: string;
  nonStrikeBatsmanName: string;
  bowlerName: string;
  balls: number;
  runsPerBall: number;
  wicketType: string;
  catchBy: string;
  runOutBy: string;
  numberOfOvers: number;
  commentry: string;
  ifWicketFalls: string;
  ifWicketFallsByCatch: string;
  ifWicketFallsByRunout: string;
  currentBall:number;
  currentOver:number;
  runsOnCurrentBall:any;
  description:String;
  showType = false;
  showCatchBy = false;
  showRunOutBy = false;
  
  constructor(public matchService: MatchService, private router: Router, private route: ActivatedRoute) {
    console.log(matchService.getMatch().getTeam1().getPlayers());
    console.log(matchService.getMatch().getTeam2().getPlayers());
  }
  
  ngOnInit() {
  }
  
  
  onAddScoreClick() {
    this.matchService.getMatch().setCurrentBall();
    this.currentBall = this.matchService.getMatch().getCurrentBall();
    this.currentOver = this.matchService.getMatch().getCurrentOver();
    this.runsOnCurrentBall=this.matchService.getMatch().getTotalRuns();
   
    console.log('in addScore');
    console.log(this.currentBall);
    console.log(this.commentry);
    console.log(this.runsOnCurrentBall);
    this.matchService.getMatch().setCommentry(this.currentBall,this.currentOver,this.runsOnCurrentBall,this.description);
  }
  

  
}
