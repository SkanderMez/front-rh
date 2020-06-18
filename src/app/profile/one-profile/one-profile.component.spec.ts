import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProfileComponent } from './one-profile.component';

describe('OneProfileComponent', () => {
  let component: OneProfileComponent;
  let fixture: ComponentFixture<OneProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
