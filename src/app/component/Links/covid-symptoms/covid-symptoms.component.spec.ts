import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidSymptomsComponent } from './covid-symptoms.component';

describe('CovidSymptomsComponent', () => {
  let component: CovidSymptomsComponent;
  let fixture: ComponentFixture<CovidSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
