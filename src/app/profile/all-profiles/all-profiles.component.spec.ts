import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfilesComponent } from './all-profiles.component';

describe('AllProfilesComponent', () => {
  let component: AllProfilesComponent;
  let fixture: ComponentFixture<AllProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
