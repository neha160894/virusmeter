import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDeathRateComponent } from './covid-death-rate.component';

describe('CovidDeathRateComponent', () => {
  let component: CovidDeathRateComponent;
  let fixture: ComponentFixture<CovidDeathRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidDeathRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDeathRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
