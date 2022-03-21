import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { 
  faPhone, faEnvelope, faLocationDot, faBell, faDollarSign, faCartShopping, 
  faSearch, faFingerprint, faHome, faChartLine, faMicrochip, faBuilding, faGrip,
  faBars, faUsers, faGear
} from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule,
    HeaderModule,
    FontAwesomeModule,
    HomeModule,
    LayoutModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ProfileComponent, LoginComponent, MainpageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPhone, faEnvelope, faLocationDot, faBell, faDollarSign, 
      faUser, faCartShopping, faSearch, faFingerprint, faHome,
      faChartLine, faMicrochip, faBuilding, faGrip, faBars,
      faUsers, faGear
    );
  }
}
