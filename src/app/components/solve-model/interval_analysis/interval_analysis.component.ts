import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MinMax } from 'src/app/models/min_max';
import { NumericSolveModels } from 'src/app/models/numeric_solve_model';
import { IntervalAnalysis } from 'src/app/models/interval_analysis';
import { SolveModelService } from 'src/app/services/solve-model.service';

@Component({
  selector: 'app-interval_analysis',
  templateUrl: './interval_analysis.component.html',
  styleUrls: ['./interval_analysis.component.css']
})
export class IntervalAnalysisComponent implements OnInit {

  form:FormGroup;
  subscription: Subscription = new Subscription();
  numeric_solve: NumericSolveModels = new NumericSolveModels();
  min_max: MinMax = new MinMax();
  

  constructor(private fb: FormBuilder, private modelService:SolveModelService) {
    this.form = this.fb.group({
      path:[''],
      file_name: [''],
    })
    this.modelService.updateBounds(true);
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


  saveIntervalAnalysis(): IntervalAnalysis{
    const interval_analysis: IntervalAnalysis = new IntervalAnalysis();
    interval_analysis.model_name = this.numeric_solve.model_name
    interval_analysis.vars_initials = this.numeric_solve.vars_initials;
    interval_analysis.params = this.numeric_solve.params;
    interval_analysis.params_est = this.numeric_solve.params_est;
    interval_analysis.t = this.numeric_solve.t;
    interval_analysis.total_points = this.numeric_solve.total_points;
    interval_analysis.method = this.numeric_solve.method;
	  interval_analysis.interval_method = 'it';
    interval_analysis.N = this.numeric_solve.N;
    interval_analysis.params_min = this.min_max.params_min;
    interval_analysis.params_max = this.min_max.params_max;
    interval_analysis.path = this.form.get('path')?.value + '\\'+this.form.get('file_name')?.value;
    console.log(interval_analysis.path)
    
    return interval_analysis;
  }

  onSubmit():void{
    this.modelService.updateAll(true);
    const interval_anal: IntervalAnalysis = this.saveIntervalAnalysis();
    this.modelService.intervalAnalysis(interval_anal).subscribe(data => {
    console.log(data)
    })

  }
}
