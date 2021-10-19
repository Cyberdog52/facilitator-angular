import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameDetailComponent} from './game-detail.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameDetailComponent],
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
            provide: 'IGameService',
            useClass: environment.gameService
          }
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
