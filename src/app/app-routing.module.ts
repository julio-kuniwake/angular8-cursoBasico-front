import { CrudComponent } from "./components/crud/crud.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { NgIfNgForComponent } from "./components/ng-if-ng-for/ng-if-ng-for.component";

const routes: Routes = [
  { path: "data-binding", component: DataBindingComponent },
  { path: "ngIf-ngFor", component: NgIfNgForComponent },
  { path: "crud", component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
