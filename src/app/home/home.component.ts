import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  images: any[];

  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];


  public myInterval: number = 5000;
  public noWrapSlides: boolean = false;
  public slides: Array<any> = [];


  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }

  }

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/pepperoni.png',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
  }


  public addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index: number): void {
    this.slides.splice(index, 1);
  }

}
