import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProcedureTypeModel } from 'src/app/models/ProcedureTypeModel';
import { ProcedureTypeService } from 'src/app/services/procedure-type.service';

@Component({
  selector: 'app-procedure-type-form',
  templateUrl: './procedure-type-form.component.html',
  styleUrls: ['./procedure-type-form.component.css']
})
export class ProcedureTypeFormComponent implements OnInit {

  procedureTypeForm: FormGroup = new FormGroup({})

  edit: boolean = false;

  constructor(
    public procedureTypeService: ProcedureTypeService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initFrom();
    console.log('ProcedureType: ', this.procedureTypeService.procedureTypeSelected);
  }

  initFrom(){
    this.procedureTypeForm = this.fb.group({
      id: [''],
      name: [''],
      person_level: ['Student'],
      abreviaton: [''],
      active: []
    });
    if(this.procedureTypeService.procedureTypeSelected){
      this.procedureTypeForm.patchValue({...this.procedureTypeService.procedureTypeSelected});
    }
  }

  btnCancel(){
    this.router.navigate(['/procedure_type_list'])
  }

  create(){
    const procedureType: ProcedureTypeModel = {...this.procedureTypeForm.value};
    this.procedureTypeService.create(procedureType)
      .subscribe(
        res =>{
          console.log('ProcedureType: ', res)
          this.procedureTypeForm.reset();
          this.btnCancel();
        })
  }

  update(){
    const procedureType: ProcedureTypeModel = {...this.procedureTypeForm.value};
    this.procedureTypeService.update(procedureType)
      .subscribe(
        res =>{
          console.log('ProcedureType: ', res)
          this.procedureTypeForm.reset();
          this.btnCancel();
        })
  }


  alert(){
    return alert("Hola");
  }
}
