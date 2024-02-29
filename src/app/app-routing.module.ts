import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';

const routes: Routes = [
  {path: 'virtual', component: VirtualComponent},
  {path: 'drag', component: DragComponent},
  {path: 'paises', component: PaisesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'virtual'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
