import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidViewByCountryComponent } from './covid-view-by-country.component';

describe('CovidViewByCountryComponent', () => {
  let component: CovidViewByCountryComponent;
  let fixture: ComponentFixture<CovidViewByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidViewByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidViewByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
