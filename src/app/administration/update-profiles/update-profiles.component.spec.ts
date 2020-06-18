import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilesComponent } from './update-profiles.component';

describe('UpdateProfilesComponent', () => {
  let component: UpdateProfilesComponent;
  let fixture: ComponentFixture<UpdateProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
