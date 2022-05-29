import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Materials
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CarouselAdvComponent } from './components/carousel-adv/carousel-adv.component';

import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewProdComponent } from './components/new-prod/new-prod.component';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { WomanComponent } from './pages/woman/woman.component';
import { ManComponent } from './pages/man/man.component';
import { CollectionsComponent } from './pages/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselAdvComponent,
    NewProdComponent,
    HomeComponent,
    SaleComponent,
    WomanComponent,
    ManComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
