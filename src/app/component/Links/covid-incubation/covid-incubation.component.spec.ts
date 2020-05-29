import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidIncubationComponent } from './covid-incubation.component';

describe('CovidIncubationComponent', () => {
  let component: CovidIncubationComponent;
  let fixture: ComponentFixture<CovidIncubationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidIncubationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidIncubationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
