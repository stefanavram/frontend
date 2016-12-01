import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AppComponent} from "./app.component";
import {PizzaModule} from "./pizza/pizza.module";
import {HomeModule} from "./home/home.module";
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {ReservationModule} from "./reservation/reservation.module";
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {LoginComponent} from "./login/login.component";
import {MaterialModule} from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    MaterialModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    PizzaModule,
    HomeModule,
    ReservationModule,
  ],
  exports: [
    TranslateModule
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
