import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInCartComponent } from './game-in-cart.component';

describe('GameInCartComponent', () => {
  let component: GameInCartComponent;
  let fixture: ComponentFixture<GameInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameInCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
