import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [
  
  {path:'list-etudiant',component:ListEtudiantComponent},
  {path:'',redirectTo:'list-etudiant',pathMatch:'full'},
  {path:'**',redirectTo:'list-etudiant',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
