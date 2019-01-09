import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAlertsComponent } from './app-alerts.component';

describe('AppAlertsComponent', () => {
  let component: AppAlertsComponent;
  let fixture: ComponentFixture<AppAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
