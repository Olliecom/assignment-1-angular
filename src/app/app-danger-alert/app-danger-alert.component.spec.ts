import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDangerAlertComponent } from './app-danger-alert.component';

describe('AppDangerAlertComponent', () => {
  let component: AppDangerAlertComponent;
  let fixture: ComponentFixture<AppDangerAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDangerAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDangerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
