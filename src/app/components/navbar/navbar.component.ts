import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navbarOpen = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'en');
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setLang(lang: string){
    this.translate.use(lang);
  }

}
