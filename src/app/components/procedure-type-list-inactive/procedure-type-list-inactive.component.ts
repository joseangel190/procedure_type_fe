import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureTypeModel } from 'src/app/models/ProcedureTypeModel';
import { ProcedureTypeService } from 'src/app/services/procedure-type.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-procedure-type-list-inactive',
  templateUrl: './procedure-type-list-inactive.component.html',
  styleUrls: ['./procedure-type-list-inactive.component.css']
})
export class ProcedureTypeListInactiveComponent implements OnInit {

  procedureTypesInactive: ProcedureTypeModel[] = [];

  constructor(
    private procedureTypeService: ProcedureTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listByStatusFalse();
  }

  listByStatusFalse(){
    this.procedureTypeService.listByStatus(false)
      .subscribe((res: any) =>{
        this.procedureTypesInactive = res;
        console.log('Procedure Type Actve', res);
      });
  }

  update(procedureType: ProcedureTypeModel){
    this.procedureTypeService.procedureTypeSelected = procedureType;
    this.router.navigate(['/procedure_type_form']).then();
  }

  restore(id: number | undefined){
          swal({
            title: '¿Estas seguro?',
            text: "Confirma si deseas restaurar el tipo de procedimiento",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si , restaurar',
            cancelButtonText: 'No, cancelar',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true
          }).then((result) => {
            if(result.value){
              this.procedureTypeService.restore(id).subscribe(dato => {
                console.log(dato);
                this.listByStatusFalse();
                swal(
                  'Tipo de procedimiento restaurado',
                  'El procedimiento ha sido restaurado con exito',
                  'success'
                )
              })
            }
          })
      }

  deleteFinal(id: number | undefined){
    this.procedureTypeService.deleteFinal(id)
      .subscribe( () => {
        this.listByStatusFalse();
      })
  }
}
