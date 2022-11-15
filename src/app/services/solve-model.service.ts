import { Injectable } from '@angular/core';
import { ModelName } from '../models/model_name';
import { BehaviorSubject, Observable } from 'rxjs'
import { NumericSolveModels } from '../models/numeric_solve_model';
import { MinMax } from '../models/min_max';
import { HttpClient } from '@angular/common/http';
import { ResultsNumericSolve } from '../models/results_numeric_solve';
import { ParameterEstimation } from '../models/parameter-estimation';
import { ResultsParameterEstimation } from '../models/results_parameter_estimation';
import { IntervalAnalysis } from '../models/interval_analysis';
import { ResultsIntervalAnalysis } from '../models/results_interval_analysis';

@Injectable({
  providedIn: 'root'
})
export class SolveModelService {

  private model_name = new BehaviorSubject<ModelName>({} as any);
  private numeric_solve_model = new BehaviorSubject<NumericSolveModels>({} as any);
  private estimation = new BehaviorSubject<boolean>(false);
  private interval = new BehaviorSubject<boolean>(false);
  private bounds = new BehaviorSubject<boolean>(false);
  private min_max = new BehaviorSubject<MinMax>({} as any);
  private update = new BehaviorSubject<boolean>(false);
  private results_numeric = new BehaviorSubject<ResultsNumericSolve>({} as any);
  private results_parameter = new BehaviorSubject<ResultsParameterEstimation>({} as any);

  apiUrl = 'http://127.0.0.1:5000/';
  numeric_solve_url = '/SolveEpidemiologicalModels';
  estimation_url = '/ParameterEstimation';
  interval_url = '/IntervalAnalysis';

  constructor(private http : HttpClient) { }

  updateModelName(model_name:ModelName){
    this.model_name.next(model_name);
  }

  obtModelName(): Observable<ModelName>{
    return this.model_name.asObservable();
  }

  updateNumericSolveModel(numeric_solve_model:NumericSolveModels){
    this.numeric_solve_model.next(numeric_solve_model);
  }

  obtNumericSolveModel():Observable<NumericSolveModels>{
    return this.numeric_solve_model.asObservable();
  }

  updateEstimation(estimation:boolean){
    this.estimation.next(estimation);
  }

  obtEstimation():Observable<boolean>{
    return this.estimation.asObservable();
  }

  updateInterval(interval:boolean){
    this.interval.next(interval);
  }

  obtInterval():Observable<boolean>{
    return this.interval.asObservable();
  }

  updateBounds(bounds:boolean){
    this.bounds.next(bounds);
  }

  obtBounds():Observable<boolean>{
    return this.bounds.asObservable();
  }

  updateAll(update:boolean){
    this.update.next(update);
  }

  obtUpdate():Observable<boolean>{
    return this.update.asObservable();
  }

  updateMinMax(min_max:MinMax){
    this.min_max.next(min_max);
  }

  obtMinMax():Observable<MinMax>{
    return this.min_max.asObservable();
  }

  numericSolve(numeric_solve: NumericSolveModels): Observable<ResultsNumericSolve>{
    return this.http.post<ResultsNumericSolve>(this.apiUrl+this.numeric_solve_url,numeric_solve);
  }

  parammeterEstimation(est: ParameterEstimation): Observable<ResultsParameterEstimation>{
    return this.http.post<ResultsParameterEstimation>(this.apiUrl+this.estimation_url,est);
  }

  intervalAnalysis(interv: IntervalAnalysis): Observable<ResultsIntervalAnalysis>{
    return this.http.post<ResultsIntervalAnalysis>(this.apiUrl+this.interval_url,interv);
  }
  
  updateResultsNumeric(results:ResultsNumericSolve){
    this.results_numeric.next(results);
  }

  obtResultsNumeric():Observable<ResultsNumericSolve>{
    return this.results_numeric.asObservable();
  }

  updateResultsParameter(results:ResultsParameterEstimation){
    this.results_parameter.next(results);
  }

  obtResultsParameter():Observable<ResultsParameterEstimation>{
    return this.results_parameter.asObservable();
  }
}
