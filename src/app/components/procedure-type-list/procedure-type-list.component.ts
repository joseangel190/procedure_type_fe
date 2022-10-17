import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { ProcedureTypeModel } from 'src/app/models/ProcedureTypeModel';
import { ProcedureTypeService } from 'src/app/services/procedure-type.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-procedure-type-list',
  templateUrl: './procedure-type-list.component.html',
  styleUrls: ['./procedure-type-list.component.css']
})
export class ProcedureTypeListComponent implements OnInit {

  procedureTypes: ProcedureTypeModel[] = [];

  constructor(
    private procedureTypeService: ProcedureTypeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll(){
    this.procedureTypeService.listAll()
      .subscribe((res: any) =>{
        this.procedureTypes = res;
        console.log("procedure_type: ", res)
      });
  }

  listByStatusTrue(){
    this.procedureTypeService.listByStatus(true)
      .subscribe((res: any) =>{
        this.procedureTypes = res;
        console.log('Procedure Type Actve', res);
      });
  }

  listByStatusFalse(){
    this.procedureTypeService.listByStatus(false)
      .subscribe((res: any) =>{
        this.procedureTypes = res;
        console.log('Procedure Type Actve', res);
      });
  }

  update(procedureType: ProcedureTypeModel){
    this.procedureTypeService.procedureTypeSelected = procedureType;
    this.router.navigate(['/procedure_type_form']).then();
  }

  delete(id: number | undefined){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al el tipo de procedimiento",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.procedureTypeService.delete(id).subscribe(dato => {
          console.log(dato);
          this.listByStatusFalse();
          swal(
            'Tipo de procedimiento eliminado',
            'El tipo de procedimiento ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
  
}
