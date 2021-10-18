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
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";

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
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    //MemberEditorDropdown,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
