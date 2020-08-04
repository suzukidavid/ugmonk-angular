import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ClothesCardComponent } from './components/clothes-card/clothes-card.component';
import { ClothesContainerComponent } from './components/clothes-container/clothes-container.component';
import { ClothesByCategoryComponent } from './components/clothes-by-category/clothes-by-category.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClothesPageComponent } from './components/pages/clothes-page/clothes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    ClothesCardComponent,
    ClothesContainerComponent,
    ClothesByCategoryComponent,
    LoginComponent,
    SignupComponent,
    ClothesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
