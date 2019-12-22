import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsvComponent } from './tsv.component';

describe('TsvComponent', () => {
  let component: TsvComponent;
  let fixture: ComponentFixture<TsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
