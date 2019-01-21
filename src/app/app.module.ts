import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentryComponent } from './match/commentry/commentry.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { NewMatchComponent } from './admin/new-match/new-match.component';

import { InningsComponent } from './admin/innings/innings.component';
import { DefineTeamsComponent } from './admin/define-teams/define-teams.component';
import { TeamPlayersComponent } from './admin/define-teams/team-players/team-players.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    ScorecardComponent,
    CommentryComponent,
    HeaderComponent,
    AdminComponent,
    NewMatchComponent,
    InningsComponent,
    DefineTeamsComponent,
    TeamPlayersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
