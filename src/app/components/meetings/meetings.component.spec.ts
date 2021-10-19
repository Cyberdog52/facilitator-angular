import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingsComponent} from './meetings.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MeetingService} from "../../services/http/meeting.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MeetingsComponent', () => {
  let component: MeetingsComponent;
  let fixture: ComponentFixture<MeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MeetingService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
