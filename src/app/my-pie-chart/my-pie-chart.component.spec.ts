import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieChartComponent } from './my-pie-chart.component';

describe('MyPieChartComponent', () => {
  let component: MyPieChartComponent;
  let fixture: ComponentFixture<MyPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPieChartComponent]
    });
    fixture = TestBed.createComponent(MyPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
