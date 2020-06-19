import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolsComponent } from './list-schools.component';

describe('ListSchoolsComponent', () => {
  let component: ListSchoolsComponent;
  let fixture: ComponentFixture<ListSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
