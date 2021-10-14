import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { GamesComponent } from './games/games.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { TopicsComponent } from './topics/topics.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MeetingDetailComponent } from './meeting-detail/meeting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    GamesComponent,
    MeetingsComponent,
    RoomsComponent,
    DashboardComponent,
    MemberDetailComponent,
    TopicsComponent,
    RoomDetailComponent,
    TopicDetailComponent,
    GameDetailComponent,
    MeetingDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
