import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureTypeListInactiveComponent } from './procedure-type-list-inactive.component';

describe('ProcedureTypeListInactiveComponent', () => {
  let component: ProcedureTypeListInactiveComponent;
  let fixture: ComponentFixture<ProcedureTypeListInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedureTypeListInactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureTypeListInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
