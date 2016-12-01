import {NgModule} from "@angular/core";
import {ReservationComponent} from "./reservation.component";
import {ROUTES} from "./reservation.routes";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "ng2-translate";
import {MessagesModule,CalendarModule} from 'primeng/primeng';
import {ReservationService} from "./reservation.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    Ng2BootstrapModule,
    TranslateModule,
    MessagesModule,
    CalendarModule
  ],
  providers:[
    ReservationService
  ],
  declarations: [ReservationComponent]
})
export class ReservationModule {
}
