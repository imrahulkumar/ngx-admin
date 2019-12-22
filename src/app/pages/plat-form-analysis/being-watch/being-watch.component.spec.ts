import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeingWatchComponent } from './being-watch.component';

describe('BeingWatchComponent', () => {
  let component: BeingWatchComponent;
  let fixture: ComponentFixture<BeingWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeingWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeingWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
