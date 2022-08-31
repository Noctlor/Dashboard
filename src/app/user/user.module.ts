import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaComponent } from './pages/lista/lista.component';
import { MaterialModule } from '../material/material.module';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MinimapComponent } from '../components/minimap/minimap.component';
import { GraficaBarraComponent } from '../components/grafica-barra/grafica-barra.component';

import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ListaComponent,
    PropiedadesComponent,
    MinimapComponent,
    GraficaBarraComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    NgChartsModule 
  ],

})
export class UserModule { }
