import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardSectionComponent } from './game-card-section.component';

describe('GameCardSectionComponent', () => {
  let component: GameCardSectionComponent;
  let fixture: ComponentFixture<GameCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
