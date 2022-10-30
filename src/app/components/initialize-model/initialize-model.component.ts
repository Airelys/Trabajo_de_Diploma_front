import { ParsedProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolveModelService } from 'src/app/services/solve-model.service';
import { Subscription} from 'rxjs'
import { ModelName } from 'src/app/model/model_name';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-initialize-model',
  templateUrl: './initialize-model.component.html',
  styleUrls: ['./initialize-model.component.css']
})
export class InitializeModelComponent implements OnInit {

  subscription: Subscription ;
  model_name: ModelName = new ModelName();
  form:FormGroup;
  form2:FormGroup;
  beta_est:Boolean =true
  methods = [{name:'RK45'},{name:'RK23'},{name:'DOP853'},{name:'Radau'},{name:'BDF'},{name:'LSODA'}]
  classical_methods = [{name:'CG'},{name:'Newton-CG'},{name:'BFGS'},{name:'L-BFGS-B'}]
  metaheuristics = [{name:'PSO'},{name:'DE'}]

  constructor(private route: ActivatedRoute, private modelService:SolveModelService, private fb: FormBuilder) { 
    
    this.subscription=this.modelService.obtModelName().subscribe(data => {
      console.log(data)
    })

    this.form = this.fb.group({
      method: [''],
      b_val: [Number], b_est: [Boolean], b_int: [Boolean], b_max: [Number], b_min: [Number],
      g_val: [Number], g_est: [Boolean], g_int: [Boolean], g_max: [Number], g_min: [Number],
      d_val: [Number], d_est: [Boolean], d_int: [Boolean], d_max: [Number], d_min: [Number],
      e_val: [Number], e_est: [Boolean], e_int: [Boolean], e_max: [Number], e_min: [Number],
      l_val: [Number], l_est: [Boolean], l_int: [Boolean], l_max: [Number], l_min: [Number],
      m_val: [Number], m_est: [Boolean], m_int: [Boolean], m_max: [Number], m_min: [Number],
      mi_val: [Number], mi_est: [Boolean], mi_int: [Boolean], mi_max: [Number], mi_min: [Number],
      S:[Number],I:[Number],R:[Number],E:[Number],
      t:[Number],
      total_points:[Number]
    })

    this.form2 = this.fb.group({
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
    this.subscription=this.modelService.obtModelName().subscribe(data => {
      console.log(data)
      this.model_name = data
    })
  }

}
