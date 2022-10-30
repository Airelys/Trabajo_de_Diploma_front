export class NumericSolveModels{
    model_name:string=''
    vars_initials: Array<number> =[];
    params: Array<number> =[];
    params_est: Array<number> =[];
    interval_est: Array<number> =[];
    t: number = 0;
    total_points: number = 0;
}