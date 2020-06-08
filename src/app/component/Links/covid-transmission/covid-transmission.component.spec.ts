import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTransmissionComponent } from './covid-transmission.component';

describe('CovidTransmissionComponent', () => {
  let component: CovidTransmissionComponent;
  let fixture: ComponentFixture<CovidTransmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTransmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
