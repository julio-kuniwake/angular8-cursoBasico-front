import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { NgIfNgForComponent } from "./components/ng-if-ng-for/ng-if-ng-for.component";
import { CrudComponent } from "./components/crud/crud.component";
import { HttpClientModule } from "@angular/common/http";
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/pai/filho/filho.component';
import { Rota1Component } from './components/rota1/rota1.component';
import { Rota2Component } from './components/rota2/rota2.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgIfNgForComponent,
    CrudComponent,
    PaiComponent,
    FilhoComponent,
    Rota1Component,
    Rota2Component,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
