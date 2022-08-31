import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';


const routes: Routes = [
  {path:'',component:HomeComponent
  ,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'lista',component:ListaComponent},
    {path:'propiedades',component:PropiedadesComponent},
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
