import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCountryComponent } from './covid-country.component';

describe('CovidCountryComponent', () => {
  let component: CovidCountryComponent;
  let fixture: ComponentFixture<CovidCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
