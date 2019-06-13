import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarChooserComponent } from './grammar-chooser/grammar-chooser.component';

const routes: Routes = [
  { path: 'polish/grammar/:id', component: GrammarComponent },
  { path: 'polish', component: GrammarChooserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
