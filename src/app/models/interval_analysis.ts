export class IntervalAnalysis{
    model_name:string='';
    vars_initials: Array<object> =[];
    params: Array<object> =[];
    params_est: Array<boolean> =[];
    t: number = 0;
    total_points: number = 0;
    method: string='';
	interval_method='it';
    N: number = 1;
    params_min: Array<number> =[];
    params_max: Array<number> =[];
    path: string='';
  }