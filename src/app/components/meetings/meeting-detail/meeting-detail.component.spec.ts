import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingDetailComponent} from './meeting-detail.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";

describe('MeetingDetailComponent', () => {
  let component: MeetingDetailComponent;
  let fixture: ComponentFixture<MeetingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers:
        [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: {
                  get: (id: string) => {
                    id: '24fkzrw3487943uf358lovd'
                  }
                }
              }
            }
          },
          {
            provide: 'IMeetingService',
            useClass: environment.meetingService
          },
          {
            provide: 'IRoomService',
            useClass: environment.roomService
          },
          {
            provide: 'ITopicService',
            useClass: environment.topicService
          },
          {
            provide: 'IGameService',
            useClass: environment.gameService
          }
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
