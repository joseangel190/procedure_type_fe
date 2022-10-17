import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedureTypeFormComponent } from './components/procedure-type-form/procedure-type-form.component';
import { ProcedureTypeListActiveComponent } from './components/procedure-type-list-active/procedure-type-list-active.component';
import { ProcedureTypeListInactiveComponent } from './components/procedure-type-list-inactive/procedure-type-list-inactive.component';
import { ProcedureTypeListComponent } from './components/procedure-type-list/procedure-type-list.component';

const routes: Routes = [

  {
    path: 'procedure_type_list',
    component: ProcedureTypeListComponent
  },
  {
    path: 'procedure_type_form',
    component: ProcedureTypeFormComponent
  },
  {
    path: 'procedure_type_list_active',
    component: ProcedureTypeListActiveComponent
  },
  {
    path: 'procedure_type_list_inactive',
    component: ProcedureTypeListInactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
