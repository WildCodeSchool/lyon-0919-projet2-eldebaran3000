import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelbarComponent } from './travelbar.component';

describe('TravelbarComponent', () => {
  let component: TravelbarComponent;
  let fixture: ComponentFixture<TravelbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
