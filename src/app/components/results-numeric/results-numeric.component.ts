import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelName } from 'src/app/models/model_name';
import { ResultsNumericSolve } from 'src/app/models/results_numeric_solve';
import { SolveModelService } from 'src/app/services/solve-model.service';
import { StyleServiceService } from 'src/app/services/style-service.service';

@Component({
  selector: 'app-results-numeric',
  templateUrl: './results-numeric.component.html',
  styleUrls: ['./results-numeric.component.css']
})
export class ResultsNumericComponent implements OnInit {

  subscription: Subscription = new Subscription();
  results: ResultsNumericSolve = new ResultsNumericSolve();
  model_name: ModelName = new ModelName();

  constructor( private router: Router, private modelService:SolveModelService, public styleService:StyleServiceService) { }

  ngOnInit(): void {
    this.subscription=this.modelService.obtResultsNumeric().subscribe(data => {
      this.results = data;
    })

    this.subscription=this.modelService.obtModelName().subscribe(data => {
      this.model_name = data
    })
  }

}
