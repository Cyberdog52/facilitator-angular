import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesComponent } from './games/games.component';
import { MeetingDetailComponent } from './meeting-detail/meeting-detail.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'games', component: GamesComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'meeting/:id', component: MeetingDetailComponent },
  { path: 'member/:id', component: MemberDetailComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'room/:id', component: RoomDetailComponent },
  { path: 'topic/:id', component: TopicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
