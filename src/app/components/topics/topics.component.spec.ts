import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopicsComponent} from './topics.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

describe('TopicComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{
        provide: 'ITopicService',
        useClass: environment.topicService
      }]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
