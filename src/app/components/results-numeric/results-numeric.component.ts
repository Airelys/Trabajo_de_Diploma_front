import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SolveModelService } from 'src/app/services/solve-model.service';

@Component({
  selector: 'app-results-numeric',
  templateUrl: './results-numeric.component.html',
  styleUrls: ['./results-numeric.component.css']
})
export class ResultsNumericComponent implements OnInit {

  subscription: Subscription = new Subscription();
  results = {}

  constructor( private router: Router, private modelService:SolveModelService) { }

  ngOnInit(): void {
    this.subscription=this.modelService.obtResultsNumeric().subscribe(data => {
      this.results = data
    })
  }

}
