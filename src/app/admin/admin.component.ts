import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit() {
     switch (this.matchService.getMatchState()) {
        case this.matchService.MATCH_NOT_STARTED:
          this.router.navigate(['/admin', 'new-match']);
          break;
        case this.matchService.MATCH_MATCH_DEFINED:
          this.router.navigate(['/admin', 'define-teams']);
          break;
        default:
          this.router.navigate(['/admin', 'innings']);

     }

  }

}
