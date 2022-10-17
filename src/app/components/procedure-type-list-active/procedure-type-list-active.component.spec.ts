import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureTypeListActiveComponent } from './procedure-type-list-active.component';

describe('ProcedureTypeListActiveComponent', () => {
  let component: ProcedureTypeListActiveComponent;
  let fixture: ComponentFixture<ProcedureTypeListActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedureTypeListActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureTypeListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
