import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MembersComponent} from './members.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembersComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{
        provide: 'IMemberService',
        useClass: environment.memberService
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
