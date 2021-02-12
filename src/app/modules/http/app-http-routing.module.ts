import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppHttpComponent } from "./app-http.component";

const rou: Routes = [
  {
    path: "",
    component: AppHttpComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(rou)],
  exports: [RouterModule]
})
export class AppHttpRouting {}
