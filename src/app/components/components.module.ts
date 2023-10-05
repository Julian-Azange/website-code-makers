import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { ServicesAreaComponent } from './services-area/services-area.component';
import { TeamAreaComponent } from './team-area/team-area.component';
import { CardClientsComponent } from '../widgets/card-clients/card-clients.component';
import { CardServicesComponent } from '../widgets/card-services/card-services.component';
import { AboutAreaComponent } from './about-area/about-area.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderAreaComponent,
    ServicesAreaComponent,
    TeamAreaComponent,
    CardClientsComponent,
    CardServicesComponent,
    AboutAreaComponent,
    HeroAreaComponent,
  ],
  imports: [
    CommonModule,
    NgModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderAreaComponent,
    ServicesAreaComponent,
    TeamAreaComponent,
    CardClientsComponent,
    CardServicesComponent,
    AboutAreaComponent,
  ]
})
export class ComponentsModule { }
