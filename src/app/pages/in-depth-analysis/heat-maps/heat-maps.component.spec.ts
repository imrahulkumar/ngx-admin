import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatMapsComponent } from './heat-maps.component';

describe('HeatMapsComponent', () => {
  let component: HeatMapsComponent;
  let fixture: ComponentFixture<HeatMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
