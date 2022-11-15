import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from './components/model/model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SolveModelComponent } from './components/solve-model/solve-model.component';
import { ParameterEstimationComponent } from './components/solve-model/parameter-estimation/parameter-estimation.component';
import { IntervalAnalysisComponent } from './components/solve-model/interval_analysis/interval_analysis.component';
import { InitializeModelComponent } from './components/solve-model/initialize-model/initialize-model.component';
import { ResultsNumericComponent } from './components/results-numeric/results-numeric.component';
import { ResultsParameterComponent } from './components/results-parameter/results-parameter.component';
import { PresentationComponent } from './components/presentation/presentation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelComponent,
    InitializeModelComponent,
    ParameterEstimationComponent,
	IntervalAnalysisComponent,
    SolveModelComponent,
    ResultsNumericComponent,
    ResultsParameterComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
