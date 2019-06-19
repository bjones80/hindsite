import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { YepComponent } from './yep/yep.component';
import { ContactComponent } from './contact/contact.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { HomeLandComponent } from './home/home-land/home-land.component';
import { HomeWeedControlComponent } from './home/home-weed-control/home-weed-control.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutHindsiteComponent } from './about/about-hindsite/about-hindsite.component';
import { AboutGalleryComponent } from './about/about-gallery/about-gallery.component';
import { AboutBossComponent } from './about/about-boss/about-boss.component';
import { AboutTimeLineComponent } from './about/about-time-line/about-time-line.component';
import { AboutBossGalleryComponent } from './about/about-boss-gallery/about-boss-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    YepComponent,
    ContactComponent,
    HomeGalleryComponent,
    HomeLandComponent,
    HomeWeedControlComponent,
    AboutHindsiteComponent,
    AboutGalleryComponent,
    AboutBossComponent,
    AboutTimeLineComponent,
    AboutBossGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
