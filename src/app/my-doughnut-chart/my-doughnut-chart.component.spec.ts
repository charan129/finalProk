import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughnutChartComponent } from './my-doughnut-chart.component';

describe('MyDoughnutChartComponent', () => {
  let component: MyDoughnutChartComponent;
  let fixture: ComponentFixture<MyDoughnutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDoughnutChartComponent]
    });
    fixture = TestBed.createComponent(MyDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
