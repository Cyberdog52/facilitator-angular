import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamesComponent} from './games.component';
import {RouterTestingModule} from "@angular/router/testing";
import {IGameService} from "../../model/game/IGameService";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{
        provide: 'IGameService',
        useClass: environment.gameService
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
