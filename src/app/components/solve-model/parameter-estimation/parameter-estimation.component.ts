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
      path: [''],
      name_file: [''],
      iter: [Number],
      particle: [Number], cognitive: [Number], social: [Number], inercia: [Number],
      population: [Number], crossing: [Number], scaled: [Number]
    })
  }

  ngOnInit(): void {
    this.subscription=this.modelService.obtNumericSolveModel().subscribe(data => {
      this.numeric_solve = data
      console.log(this.numeric_solve)
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

  saveEstimationParameter(): void{
    const estimation_parameter: ParameterEstimation = new ParameterEstimation();
    estimation_parameter.model_name = this.numeric_solve.model_name
    estimation_parameter.vars_initials = this.numeric_solve.vars_initials;
    estimation_parameter.params = this.numeric_solve.params;
    estimation_parameter.params_est = this.numeric_solve.params_est;
    estimation_parameter.t = this.numeric_solve.t;
    estimation_parameter.total_points = this.numeric_solve.total_points;
    estimation_parameter.method = this.numeric_solve.method;
    estimation_parameter.N = this.numeric_solve.N;
    estimation_parameter.params_min = this.min_max.params_min;
    estimation_parameter.params_max = this.min_max.params_max;
    estimation_parameter.classical_method = this.classical_method;
    estimation_parameter.metaheuristic = this.metaheuristic;
    estimation_parameter.path = this.form.get('path')?.value + this.form.get('name_file')?.value;
    estimation_parameter.iter = this.form.get('iter')?.value;
    estimation_parameter.particle = this.form.get('particle')?.value;
    estimation_parameter.cognitive = this.form.get('cognitive')?.value;
    estimation_parameter.social = this.form.get('social')?.value;
    estimation_parameter.inercia = this.form.get('inercia')?.value;
    estimation_parameter.population = this.form.get('population')?.value;
    estimation_parameter.crossing = this.form.get('crossing')?.value;
    estimation_parameter.scaled = this.form.get('scaled')?.value;
  }

  onSubmit():void{
    this.modelService.updateAll(true);

  }

}
