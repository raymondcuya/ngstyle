import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MytemplateComponent } from "./mytemplate/mytemplate.component";
import { HttpClientModule } from "@angular/common/http";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, MytemplateComponent, SafePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
