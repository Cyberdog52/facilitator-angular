import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MembersComponent} from './components/members/members.component';
import {GamesComponent} from './components/games/games.component';
import {MeetingsComponent} from './components/meetings/meetings.component';
import {RoomsComponent} from './components/rooms/rooms.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MemberDetailComponent} from './components/members/member-detail/member-detail.component';
import {TopicsComponent} from './components/topics/topics.component';
import {RoomDetailComponent} from './components/rooms/room-detail/room-detail.component';
import {TopicDetailComponent} from './components/topics/topic-detail/topic-detail.component';
import {GameDetailComponent} from './components/games/game-detail/game-detail.component';
import {MeetingDetailComponent} from './components/meetings/meeting-detail/meeting-detail.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {SafePipe} from "./safe.pipe";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    SafePipe,
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
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
