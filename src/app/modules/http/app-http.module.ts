import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { AppHttpComponent } from "./app-http.component";
import { AppHttpRouting } from "./app-http-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppHttpRouting],
  declarations: [AppHttpComponent]
})
export class AppHttpModule {}
