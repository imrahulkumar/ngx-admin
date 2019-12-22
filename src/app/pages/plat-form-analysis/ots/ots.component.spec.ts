import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtsComponent } from './ots.component';

describe('OtsComponent', () => {
  let component: OtsComponent;
  let fixture: ComponentFixture<OtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
