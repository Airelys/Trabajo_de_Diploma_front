import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ModelName } from 'src/app/models/model_name';
import { SolveModelService } from 'src/app/services/solve-model.service';

@Component({
  selector: 'app-solve-model',
  templateUrl: './solve-model.component.html',
  styleUrls: ['./solve-model.component.css']
})
export class SolveModelComponent implements OnInit {

  subscription: Subscription = new Subscription();
  model_name: ModelName = new ModelName();
  estimation: boolean = false

  constructor(private modelService:SolveModelService) {
    this.subscription=this.modelService.obtModelName().subscribe(data => {
      this.model_name = data
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void{

  }

  updateEstimation():void{
    this.estimation=true
  }

}
