import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    exports: [MatToolbarModule,
              MatFormFieldModule,
              MatSelectModule,
              MatOptionModule,
              MatButtonModule,
              MatIconModule
              ]
})

export class MaterialModule{ }
