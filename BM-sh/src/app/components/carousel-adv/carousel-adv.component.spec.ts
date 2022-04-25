import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAdvComponent } from './carousel-adv.component';

describe('CarouselAdvComponent', () => {
  let component: CarouselAdvComponent;
  let fixture: ComponentFixture<CarouselAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
