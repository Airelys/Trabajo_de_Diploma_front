import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MinMax } from 'src/app/models/min_max';
import { NumericSolveModels } from 'src/app/models/numeric_solve_model';
import { ParameterEstimation } from 'src/app/models/parameter-estimation';
import { SolveModelService } from 'src/app/services/solve-model.service';

@Component({
  selector: 'app-parameter-estimation',
  templateUrl: './parameter-estimation.component.html',
  styleUrls: ['./parameter-estimation.component.css']
})
export class ParameterEstimationComponent implements OnInit {

  form:FormGroup;
  subscription: Subscription = new Subscription();
  numeric_solve: NumericSolveModels = new NumericSolveModels();
  min_max: MinMax = new MinMax();
  classical_methods = [{name:'None'},{name:'CG'},{name:'Newton-CG'},{name:'BFGS'},{name:'L-BFGS-B'}];
  metaheuristics = [{name:'None'},{name:'PSO'},{name:'DE'}];
  classical_method = 'None';
  metaheuristic = 'None';
  bounds = false;
  pso = false;
  de = false;

  constructor(private fb: FormBuilder, private modelService:SolveModelService) {
    this.form = this.fb.group({
      path:[''],
      file_name: [''],
      iter: [Number],
      particle: [Number], cognitive: [Number], social: [Number], inercia: [Number],
      population: [Number], crossing: [Number], scaled: [Number]
    })
  }

  ngOnInit(): void {
    this.subscription=this.modelService.obtNumericSolveModel().subscribe(data => {
      this.numeric_solve = data
      console.log(this.numeric_solve.params)
    })

    this.subscription=this.modelService.obtMinMax().subscribe(data => {
      this.min_max = data
      console.log(this.min_max)
    })
  }

  updateClassicalMethod(value:string){
    this.classical_method = value;
  }

  updateMetaheuristic(value:string){
    this.metaheuristic = value;
    if (this.metaheuristic!='None'){
      this.modelService.updateBounds(true);
      if(this.metaheuristic=='PSO'){
        this.pso = true;
        this.de =false;
      }
      else{
        this.de = true;
        this.pso =false;
      }
    }
    else{
      this.pso = false;
      this.de =false;
      this.modelService.updateBounds(false);
    }
  }

  saveParameterEstimation(): ParameterEstimation{
    const parameter_estimation: ParameterEstimation = new ParameterEstimation();
    parameter_estimation.model_name = this.numeric_solve.model_name
    parameter_estimation.vars_initials = this.numeric_solve.vars_initials;
    parameter_estimation.params = this.numeric_solve.params;
    parameter_estimation.params_est = this.numeric_solve.params_est;
    parameter_estimation.t = this.numeric_solve.t;
    parameter_estimation.total_points = this.numeric_solve.total_points;
    parameter_estimation.method = this.numeric_solve.method;
    parameter_estimation.N = this.numeric_solve.N;
    parameter_estimation.params_min = this.min_max.params_min;
    parameter_estimation.params_max = this.min_max.params_max;
    parameter_estimation.classical_method = this.classical_method;
    parameter_estimation.metaheuristic = this.metaheuristic;
    parameter_estimation.path = this.form.get('path')?.value + '\\'+this.form.get('file_name')?.value;
    console.log(parameter_estimation.path)
    if(this.metaheuristic!='None'){
      parameter_estimation.iter = this.form.get('iter')?.value;
      if(this.metaheuristic!='PSO'){
        parameter_estimation.particle = this.form.get('particle')?.value;
        parameter_estimation.cognitive = this.form.get('cognitive')?.value;
        parameter_estimation.social = this.form.get('social')?.value;
        parameter_estimation.inercia = this.form.get('inercia')?.value;
      }
      else{
        parameter_estimation.population = this.form.get('population')?.value;
        parameter_estimation.crossing = this.form.get('crossing')?.value;
        parameter_estimation.scaled = this.form.get('scaled')?.value;
      }
    }
    return parameter_estimation;
  }

  onSubmit():void{
    this.modelService.updateAll(true);
    const parameter_est: ParameterEstimation = this.saveParameterEstimation();
    this.modelService.parammeterEstimation(parameter_est).subscribe(data => {
      console.log(data)
    })

  }
}
