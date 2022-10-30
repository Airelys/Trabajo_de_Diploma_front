import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitializeModelComponent } from './components/initialize-model/initialize-model.component';
import { ModelComponent } from './components/model/model.component';

const routes: Routes = [
  {path:'model', component: ModelComponent},
  {path:'initialize_model', component: InitializeModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
