import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartsComponent } from './ng-charts.component';

describe('NgChartsComponent', () => {
  let component: NgChartsComponent;
  let fixture: ComponentFixture<NgChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgChartsComponent]
    });
    fixture = TestBed.createComponent(NgChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
