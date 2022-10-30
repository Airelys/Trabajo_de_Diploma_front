import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
    exports: [MatToolbarModule,
              MatFormFieldModule,
              MatSelectModule,
              MatOptionModule
              ]
})

export class MaterialModule{ }