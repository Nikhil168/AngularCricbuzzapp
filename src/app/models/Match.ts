import { Team } from './Team';
import { Batting } from './Batting';
import { Balling } from './Balling';
import {Commentry} from './Commentry';

export class Match {
  readonly DECISION_BATTING = 1;
  readonly DECISION_BALLING = 2;
  
  private team1name: String;
  private team2name: String;
  private tossWinBy: String;
  
  private team1: Team;
  private team2: Team;
  
  private toss: String;
  private decision: number;
  private oversForMatch: number;
  
  private commentry:Array<Commentry>=[];
  private currentBall: number = 0;
  private currentOver: number = 0;
  private totalRuns: number = 0;
 
  constructor() { }
  
  public get numberOfOvers(): number {
    return this.oversForMatch;
  }
  public set numberOfOvers(value: number) {
    this.oversForMatch = value;
  }
  
  setTeamName(team1Name: String, team2Name: String) {
    this.team1name = team1Name;
    this.team2name = team2Name;
    this.team1 = new Team();
    this.team2 = new Team();
  }
  setToss(teamName: String, decision: number): boolean {
    this.toss = teamName;
    this.decision = decision;
    console.log(this.tossWinBy);
    console.log(this.decision);
    return true;
  }
  setOvers(over: number) {
    this.oversForMatch = over;
    console.log(this.oversForMatch);
  }
  setTeams(team1: Team, team2: Team) {
    this.team1 = team1;
    this.team2 = team2;
    console.log(team1);
    console.log(team2);
  }
  setCommentry(currentBall, currentOver,runsOnCurrentBall, description) {
    this.commentry.push(new Commentry(currentBall, currentOver, runsOnCurrentBall, description));
  }
  getCommentry() {
    return this.commentry;
  }
  getToss(): String {
    return this.toss;
  }
  getDecision(): number {
    return this.decision;
  }
  getTeam1Name(): String {
    return this.team1name;
  }
  getTeam2Name(): String {
    return this.team2name;
  }
  getTeam1() {
    return this.team1;
  }
  getTeam2() {
    return this.team2;
  }
  getBattingTeam() {
    if (this.toss === this.team1name && this.decision === this.DECISION_BATTING) {
      return this.team1;
    } else {
      return this.team2;
    }
  }
  getOvers(){
    return this.oversForMatch;
  }
  getBallingTeam(){
    if(this.toss === this.team2name && this.decision === this.DECISION_BALLING) {
      return this.team2;
    } else {
      return this.team1;
    }
  }
  
  setCurrentBall() {
    this.currentBall++;
    if (this.currentBall >= 7) {
      this.currentBall = 1;
      this.currentOver++;
    }
  }
  getCurrentBall() {
    return this.currentBall;
  }
  getCurrentOver() {
    return this.currentOver;
  }
  setTotalRuns(totalRuns: number) {
    this.totalRuns = this.totalRuns + (totalRuns);
    console.log(this.totalRuns);
  }
  getTotalRuns(): number {
    return this.totalRuns;
  }
   
}


