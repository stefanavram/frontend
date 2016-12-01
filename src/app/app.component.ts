import {Component, ViewEncapsulation} from "@angular/core";
import {Auth} from "./common/auth.service";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  providers: [Auth],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: Auth, private translate: TranslateService) {
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');

  }
}
