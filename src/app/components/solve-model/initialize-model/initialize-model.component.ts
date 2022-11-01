import { ParsedProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolveModelService } from 'src/app/services/solve-model.service';
import { Subscription} from 'rxjs'
import { ModelName } from 'src/app/models/model_name';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-initialize-model',
  templateUrl: './initialize-model.component.html',
  styleUrls: ['./initialize-model.component.css']
})
export class InitializeModelComponent implements OnInit {

  form:FormGroup;
  subscription: Subscription = new Subscription();
  model_name: ModelName = new ModelName();
  vars_initials = [{},{},{},{}]
  params_initials = [{},{},{},{},{},{},{}]
  params_est = [{},{},{},{},{},{},{}]
  params_int = [{},{},{},{},{},{},{}]
  params_max = [{},{},{},{},{},{},{}]
  params_min = [{},{},{},{},{},{},{}]
  methods = [{name:'RK45'},{name:'RK23'},{name:'DOP853'},{name:'Radau'},{name:'BDF'},{name:'LSODA'}]

  constructor(private route: ActivatedRoute, private modelService:SolveModelService,
              private fb: FormBuilder) {

    this.form = this.fb.group({
      method: [''],
      S:[Number],I:[Number],R:[Number],E:[Number],
      t:[Number],
      total_points:[Number],
      N:[Number]
    })
  }

  ngOnInit(): void {
    this.subscription=this.modelService.obtModelName().subscribe(data => {
      this.model_name = data
      console.log(this.model_name.model_name)
    })
  }

  updateParamsInitials(position:number,value:string):void{
    this.params_initials.splice(position,1,Number(value))
  }

  updateVarsInitials(position:number,value:string):void{
    this.vars_initials.splice(position,1,Number(value))
  }

  updateParamsEstInitials(position:number,value:string):void{
    this.params_est.splice(position,1,Boolean(value))
  }

  updateParamsMinInitials(position:number,value:string):void{
    this.params_min.splice(position,1,Number(value))
  }

  updateParamsMaxInitials(position:number,value:string):void{
    this.params_max.splice(position,1,Number(value))
  }

  updateParamsIntInitials(position:number,value:string):void{
    this.params_int.splice(position,1,Boolean(value))
  }

  updateModelData():void{
    var temp = [this.params_initials, this.params_est,this.params_int,this.params_min,this.params_max]

    switch(this.model_name.model_name){
      case 'SI':
        for (let element of temp){
          element= [element[0],element[4],element[5],element[6]];
        }
        this.vars_initials = [this.vars_initials[0],this.vars_initials[1]];
        break;
      case 'SIR':
        for (let element of temp){
          element= [element[0],element[1],element[4],element[5],element[6]];
        }
        this.vars_initials = [this.vars_initials[0],this.vars_initials[1],this.vars_initials[2]];
        break;
      case 'SIRS':
        for (let element of temp){
          element= [element[0],element[1],element[2],element[4],element[5],element[6]];
        }
        this.vars_initials = [this.vars_initials[0],this.vars_initials[1],this.vars_initials[2]];
        break;
      case 'SEIR':
        for (let element of temp){
          element= [element[0],element[3],element[1],element[4],element[5],element[6]];
        }
        this.vars_initials = [this.vars_initials[0],this.vars_initials[1],this.vars_initials[2],this.vars_initials[3]];
        break;
      default:
        break
    }
  }

}
