import {Component, ViewEncapsulation} from '@angular/core';
import {Auth} from './common/auth.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  providers: [Auth],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth: Auth) {
  }
}
