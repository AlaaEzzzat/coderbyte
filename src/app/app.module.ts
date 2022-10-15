import { HomeComponent } from "./Components/home/home.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./Components/card/card.component";
import { MainCardComponent } from "./Components/main-card/main-card.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MainCardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
