import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parameter-estimation',
  templateUrl: './parameter-estimation.component.html',
  styleUrls: ['./parameter-estimation.component.css']
})
export class ParameterEstimationComponent implements OnInit {

  form:FormGroup;
  classical_methods = [{name:'CG'},{name:'Newton-CG'},{name:'BFGS'},{name:'L-BFGS-B'}]
  metaheuristics = [{name:'PSO'},{name:'DE'}]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      classical_method: [''],
      metaheuristic: [''],
      path: [''],
      name_file: [''],
      iter: [Number],
      particle: [Number], cognitive: [Number], social: [Number], inercia: [Number],
      population: [Number], crossing: [Number], scaled: [Number]
    })
  }

  ngOnInit(): void {
  }

}
