import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponentComponent } from './game-card-component.component';

describe('GameCardComponentComponent', () => {
  let component: GameCardComponentComponent;
  let fixture: ComponentFixture<GameCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
