import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DefineTeamsComponent } from './admin/define-teams/define-teams.component';
import { NewMatchComponent } from './admin/new-match/new-match.component';
import { InningsComponent } from './admin/innings/innings.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentryComponent } from './match/commentry/commentry.component';

const routes: Routes = [
  {path: '', redirectTo: 'scorecard', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent,
        children: [
          {path: 'new-match', component: NewMatchComponent},
          {path: 'define-teams', component: DefineTeamsComponent},
          {path: 'innings', component: InningsComponent} ]},
  {path: 'scorecard', component: ScorecardComponent} ,
  {path: 'commentry', component: CommentryComponent},
  {path: '**', redirectTo: 'scorecard'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
