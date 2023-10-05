import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';
import { ServicesAreaComponent } from './components/services-area/services-area.component';
import { ClientsAreaComponent } from './components/clients-area/clients-area.component';
import { NewsAreaComponent } from './components/news-area/news-area.component';
import { TeamAreaComponent } from './components/team-area/team-area.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { CardServicesComponent } from './widgets/card-services/card-services.component';
import { SliderClientsComponent } from './widgets/slider-clients/slider-clients.component';
import { CardClientsComponent } from './widgets/card-clients/card-clients.component';
import { SliderNewsComponent } from './widgets/slider-news/slider-news.component';
import { CardTeamComponent } from './widgets/card-team/card-team.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HeroAreaComponent,
    AboutAreaComponent,
    ServicesAreaComponent,
    ClientsAreaComponent,
    NewsAreaComponent,
    TeamAreaComponent,
    HomeLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ClientsPageComponent,
    NewsPageComponent,
    ContactPageComponent,
    QuestionsPageComponent,
    TeamPageComponent,
    CardServicesComponent,
    SliderClientsComponent,
    CardClientsComponent,
    SliderNewsComponent,
    CardTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
