import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GamesComponent } from './components/games/games.component';
import { MeetingDetailComponent } from './components/meetings/meeting-detail/meeting-detail.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { MembersComponent } from './components/members/members.component';
import { RoomDetailComponent } from './components/rooms/room-detail/room-detail.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { TopicDetailComponent } from './components/topics/topic-detail/topic-detail.component';
import { TopicsComponent } from './components/topics/topics.component';

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
