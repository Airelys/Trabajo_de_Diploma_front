import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './components/model/model.component';
import { SolveModelComponent } from './components/solve-model/solve-model.component';
import { ParameterEstimationComponent } from './components/solve-model/parameter-estimation/parameter-estimation.component';
import { IntervalAnalysisComponent } from './components/solve-model/interval_analysis/interval_analysis.component';

const routes: Routes = [
  {path:'model', component: ModelComponent},
  {path:'solve_model', component: SolveModelComponent},
  {path:'estimation', component: ParameterEstimationComponent},
  {path:'interval', component: IntervalAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
