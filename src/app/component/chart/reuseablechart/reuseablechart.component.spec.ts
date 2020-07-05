import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseablechartComponent } from './reuseablechart.component';

describe('ReuseablechartComponent', () => {
  let component: ReuseablechartComponent;
  let fixture: ComponentFixture<ReuseablechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseablechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseablechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
