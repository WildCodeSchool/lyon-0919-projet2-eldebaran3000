import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockbarComponent } from './stockbar.component';

describe('StockbarComponent', () => {
  let component: StockbarComponent;
  let fixture: ComponentFixture<StockbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
