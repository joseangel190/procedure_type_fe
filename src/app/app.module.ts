import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcedureTypeListComponent } from './components/procedure-type-list/procedure-type-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProcedureTypeFormComponent } from './components/procedure-type-form/procedure-type-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcedureTypeListActiveComponent } from './components/procedure-type-list-active/procedure-type-list-active.component';
import { ProcedureTypeListInactiveComponent } from './components/procedure-type-list-inactive/procedure-type-list-inactive.component';


@NgModule({
  declarations: [
    AppComponent,
    ProcedureTypeListComponent,
    ProcedureTypeFormComponent,
    ProcedureTypeListActiveComponent,
    ProcedureTypeListInactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
