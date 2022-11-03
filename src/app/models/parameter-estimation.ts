export class ParameterEstimation{
  model_name:string=''
  vars_initials: Array<object> =[];
  params: Array<object> =[];
  params_est: Array<boolean> =[];
  t: number = 0;
  total_points: number = 0;
  method: string=''
  N: number = 1
  params_min: Array<object> =[];
  params_max: Array<object> =[];
  classical_method: string='None';
  metaheuristic: string='None';
  path: string='';
  iter: number = 10;
  particle: number = 5;
  cognitive: number = 0.5;
  social: number = 0.3;
  inercia: number = 0.9;
  population: number = 100;
  crossing: number = 0.8;
  scaled: number = 0.6;
}
