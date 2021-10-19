import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopicsComponent} from './topics.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TopicService} from "../../services/http/topic.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TopicComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [TopicService]

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
