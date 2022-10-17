import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProcedureTypeModel } from '../models/ProcedureTypeModel';

@Injectable({
  providedIn: 'root'
})
export class ProcedureTypeService {

  public procedureTypeSelected: ProcedureTypeModel | undefined;

  url: string = environment.procedureTypeApi;

  constructor(
    private http: HttpClient) { }

  
  listAll() {
    return this.http.get(this.url);
  }

  listById(id: number | undefined){
    return this.http.get(this.url + id);
  }

  listByStatus(active: boolean){
    return this.http.get(this.url + '/active/' + active);
  }

  create(procedureType: ProcedureTypeModel) {
    return this.http.post(this.url, procedureType);
  }

  update(procedureType: ProcedureTypeModel) {
    return this.http.put(this.url, procedureType);
  }

  delete(id: number | undefined){
    return this.http.delete(this.url + '/delete/' + id);
  }

  restore(id: number | undefined){
    return this.http.delete(this.url + '/restore/' + id);
  }

  deleteFinal(id: number | undefined){
    return this.http.delete(this.url + '/final/' + id);
  }
}
