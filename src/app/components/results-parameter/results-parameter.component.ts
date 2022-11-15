import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelName } from 'src/app/models/model_name';
import { NumericSolveModels } from 'src/app/models/numeric_solve_model';
import { ResultsParameterEstimation } from 'src/app/models/results_parameter_estimation';
import { SolveModelService } from 'src/app/services/solve-model.service';
import { StyleServiceService } from 'src/app/services/style-service.service';

@Component({
  selector: 'app-results-parameter',
  templateUrl: './results-parameter.component.html',
  styleUrls: ['./results-parameter.component.css']
})
export class ResultsParameterComponent implements OnInit {

  subscription: Subscription = new Subscription();
  results: ResultsParameterEstimation = new ResultsParameterEstimation();
  numeric_solve: NumericSolveModels = new NumericSolveModels();
  model_name: ModelName = new ModelName();

  constructor(private router: Router, private modelService:SolveModelService, public styleService:StyleServiceService) { }

  ngOnInit(): void {
    this.subscription=this.modelService.obtResultsParameter().subscribe(data => {
      this.results = data
    })

    this.subscription=this.modelService.obtModelName().subscribe(data => {
      this.model_name = data
    })

    this.subscription=this.modelService.obtNumericSolveModel().subscribe(data => {
      this.numeric_solve = data
      console.log(this.numeric_solve.params)
    })
  }
}
