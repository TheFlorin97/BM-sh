import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './pages/collections/collections.component';
import { HomeComponent } from './pages/home/home.component';
import { ManComponent } from './pages/man/man.component';
import { SaleComponent } from './pages/sale/sale.component';
import { WomanComponent } from './pages/woman/woman.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'man', component: ManComponent },
  { path: 'woman', component: WomanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
