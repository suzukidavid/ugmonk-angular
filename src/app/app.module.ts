import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ClothesCardComponent } from './components/clothes-card/clothes-card.component';
import { ClothesContainerComponent } from './components/clothes-container/clothes-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    ClothesCardComponent,
    ClothesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
