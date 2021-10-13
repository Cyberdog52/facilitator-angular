import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'member/:id', component: MemberDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
