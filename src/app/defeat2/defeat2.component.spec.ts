import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Defeat2Component } from './defeat2.component';

describe('Defeat2Component', () => {
  let component: Defeat2Component;
  let fixture: ComponentFixture<Defeat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Defeat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Defeat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
