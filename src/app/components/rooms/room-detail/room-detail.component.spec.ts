import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoomDetailComponent} from './room-detail.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";

describe('RoomDetailComponent', () => {
  let component: RoomDetailComponent;
  let fixture: ComponentFixture<RoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomDetailComponent],
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
            provide: 'IRoomService',
            useClass: environment.roomService
          }
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
