import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationComponent} from './reservation.component';
import {ROUTES} from './reservation.routes';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    Ng2BootstrapModule
  ],
  declarations: [ReservationComponent]
})
export class ReservationModule {
}
