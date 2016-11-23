import { async, TestBed } from '@angular/core/testing';
import { ReservationComponent } from './reservation.component';
describe('ReservationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReservationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReservationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/reservation/reservation.component.spec.js.map