import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './components/model/model.component';
import { ResultsNumericComponent } from './components/results-numeric/results-numeric.component';
import { SolveModelComponent } from './components/solve-model/solve-model.component';

const routes: Routes = [
  {path:'model', component: ModelComponent},
  {path:'solve_model', component: SolveModelComponent},
  {path:'results_numeric', component: ResultsNumericComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
