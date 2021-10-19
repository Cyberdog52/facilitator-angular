import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberDetailComponent} from './member-detail.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";

describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberDetailComponent],
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
          }
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
