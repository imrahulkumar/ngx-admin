import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaunchComponent } from './new-launch.component';

describe('NewLaunchComponent', () => {
  let component: NewLaunchComponent;
  let fixture: ComponentFixture<NewLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
