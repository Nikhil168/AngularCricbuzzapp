import { Injectable } from '@angular/core';

import { Match } from '../models/Match';

@Injectable({ providedIn: 'root' })

export class MatchService {

  readonly MATCH_NOT_STARTED           = 0;
  readonly MATCH_MATCH_DEFINED         = 1;
  readonly MATCH_TEAMS_DEFINED         = 2;
  readonly MATCH_FIRST_INNING_STARTED  = 3;
  readonly MATCH_FIRST_INNING_END      = 4;
  readonly MATCH_SECOND_INNING_STARTED = 5;
  readonly MATCH_SECOND_INNING_END     = 6;
  readonly MATCH_FINISHED              = 7;

  private matchState: number;
  private match: Match;

  constructor() {
    this.matchState = this.MATCH_NOT_STARTED;
    this.match = new Match();
  }
  getMatchState(): number {
    return this.matchState;
  }
  getMatch() {
    return this.match;
  }
  setMatchState() {
    this.matchState++;
  }
}
