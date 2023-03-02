import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfNgForComponent } from './components/ng-if-ng-for/ng-if-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgIfNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }