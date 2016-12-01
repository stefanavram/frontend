import {NgModule} from "@angular/core";
import {ReservationComponent} from "./reservation.component";
import {ROUTES} from "./reservation.routes";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "ng2-translate";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    Ng2BootstrapModule,
    TranslateModule
  ],
  declarations: [ReservationComponent]
})
export class ReservationModule {
}
