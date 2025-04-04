import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameShowcasePageComponent } from './game-showcase-page.component';

describe('GameShowcasePageComponent', () => {
  let component: GameShowcasePageComponent;
  let fixture: ComponentFixture<GameShowcasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameShowcasePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
