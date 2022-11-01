import { Injectable } from '@angular/core';
import { ModelName } from '../models/model_name';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SolveModelService {

  private model_name = new BehaviorSubject<ModelName>({}as any);

  constructor() { }

  updateModelName(model_name:ModelName){
    this.model_name.next(model_name);
  }

  obtModelName(): Observable<ModelName>{
    return this.model_name.asObservable();
  }
}
