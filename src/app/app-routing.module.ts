import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'clients',
    component: ClientsPageComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
