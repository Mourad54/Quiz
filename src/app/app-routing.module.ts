import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
 {path:'acceuil',component:AcceuilComponent},
 {path: 'game',component:GameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
