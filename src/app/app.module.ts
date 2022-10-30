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
import { InitializeModelComponent } from './components/initialize-model/initialize-model.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelComponent,
    InitializeModelComponent
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
