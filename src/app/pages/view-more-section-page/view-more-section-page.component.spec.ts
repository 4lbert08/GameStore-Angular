import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreSectionPageComponent } from './view-more-section-page.component';

describe('ViewMoreSectionPageComponent', () => {
  let component: ViewMoreSectionPageComponent;
  let fixture: ComponentFixture<ViewMoreSectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMoreSectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
