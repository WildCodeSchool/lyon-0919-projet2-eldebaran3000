import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryPageComponent } from './victory-page.component';

describe('VictoryPageComponent', () => {
  let component: VictoryPageComponent;
  let fixture: ComponentFixture<VictoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
