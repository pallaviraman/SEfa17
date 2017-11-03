import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubleaseFormComponent } from './add-sublease-form.component';

describe('AddSubleaseFormComponent', () => {
  let component: AddSubleaseFormComponent;
  let fixture: ComponentFixture<AddSubleaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubleaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubleaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
