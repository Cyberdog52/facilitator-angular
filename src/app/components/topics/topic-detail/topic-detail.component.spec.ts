import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopicDetailComponent} from './topic-detail.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";

describe('TopicDetailComponent', () => {
  let component: TopicDetailComponent;
  let fixture: ComponentFixture<TopicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicDetailComponent],
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
            provide: 'IMemberService',
            useClass: environment.memberService
          },
          {
            provide: 'ITopicService',
            useClass: environment.topicService
          }
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
