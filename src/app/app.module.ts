import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './commercial/dashboard/dashboard.component';
import { VenteComponent } from './commercial/vente/vente.component';
import { HistoriqueVenteComponent } from './historique-vente/historique-vente.component';
import { DepenseComponent } from './depense/depense.component';
import { ClientComponent } from './client/client.component';
import { ListePersonnelComponent } from './personnel/liste-personnel/liste-personnel.component';
import { AjoutPersonnelComponent } from './personnel/ajout-personnel/ajout-personnel.component';
import { AjoutProduitComponent } from './produit/ajout-produit/ajout-produit.component';
import { ListeProduitComponent } from './produit/liste-produit/liste-produit.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent,
    children: [
      { path: 'commercial', component: DashboardComponent},
      { path: 'vente', component: VenteComponent },
      { path: 'historique/:type', component: HistoriqueVenteComponent },
      { path: 'depense/:type', component: DepenseComponent },
      { path: 'client', component: ClientComponent },
      { path: 'personnel/add', component: AjoutPersonnelComponent },
      { path: 'personnel/liste', component: ListePersonnelComponent },
      { path: 'produit/add', component: AjoutProduitComponent },
      { path: 'produit/liste', component: ListeProduitComponent }
    ]
},
  { path: 'login', component:  LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DashboardComponent,
    VenteComponent,
    HistoriqueVenteComponent,
    DepenseComponent,
    ClientComponent,
    ListePersonnelComponent,
    AjoutPersonnelComponent,
    AjoutProduitComponent,
    ListeProduitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
