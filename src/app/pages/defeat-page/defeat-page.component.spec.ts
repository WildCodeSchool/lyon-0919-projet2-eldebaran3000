import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefeatPageComponent } from './defeat-page.component';

describe('DefeatPageComponent', () => {
  let component: DefeatPageComponent;
  let fixture: ComponentFixture<DefeatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefeatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefeatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
