import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductionSpeedComponent } from './menu-production-speed.component';

describe('MenuProductionSpeedComponent', () => {
  let component: MenuProductionSpeedComponent;
  let fixture: ComponentFixture<MenuProductionSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProductionSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProductionSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
