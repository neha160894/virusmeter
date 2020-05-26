import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiacasesComponent } from './indiacases.component';

describe('IndiacasesComponent', () => {
  let component: IndiacasesComponent;
  let fixture: ComponentFixture<IndiacasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiacasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiacasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
