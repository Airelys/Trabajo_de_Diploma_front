import { ParsedProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolveModelService } from 'src/app/services/solve-model.service';
import { Subscription} from 'rxjs'
import { ModelName } from 'src/app/model/model_name';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-initialize-model',
  templateUrl: './initialize-model.component.html',
  styleUrls: ['./initialize-model.component.css']
})
export class InitializeModelComponent implements OnInit {

  subscription: Subscription ;
  model_name: ModelName = new ModelName();
  form:FormGroup;
  beta_est:Boolean =false

  constructor(private route: ActivatedRoute, private modelService:SolveModelService, private fb: FormBuilder) { 
    this.subscription=this.modelService.obtModelName().subscribe(data => {
      console.log(data)
    })

    this.form = this.fb.group({
      beta: this.fb.group({ b_val: [Number,Validators.required],
              b_est: [Boolean],
              b_int: [Boolean]
      }),
      gamma: this.fb.group({ g_val: [Number,Validators.required],
              g_est: [Boolean],
              g_int: [Boolean]
      }),
      delta: this.fb.group({ d_val: [Number,Validators.required],
              d_est: [Boolean],
              d_int: [Boolean]
      }),
      e: this.fb.group({ e_val: [Number,Validators.required],
              e_est: [Boolean],
              e_int: [Boolean]
      }),
      birth: this.fb.group({ l_val: [Number,Validators.required],
              l_est: [Boolean],
              l_int: [Boolean]
      }),
      death: this.fb.group({ m_val: [Number,Validators.required],
              m_est: [Boolean],
              m_int: [Boolean]
      }),
      death_i: this.fb.group({ mi_val: [Number,Validators.required],
              mi_est: [Boolean],
              mi_int: [Boolean]
      }),
      vars: this.fb.group({ S:[Number,Validators.required],
              I:[Number,Validators.required],
              R:[Number,Validators.required],
              E:[Number,Validators.required]        
      })
    })
  }

  ngOnInit(): void {
    this.subscription=this.modelService.obtModelName().subscribe(data => {
      console.log(data)
      this.model_name = data
    })
  }

}
