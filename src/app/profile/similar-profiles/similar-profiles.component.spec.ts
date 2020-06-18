import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProfilesComponent } from './similar-profiles.component';

describe('SimilarProfilesComponent', () => {
  let component: SimilarProfilesComponent;
  let fixture: ComponentFixture<SimilarProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
