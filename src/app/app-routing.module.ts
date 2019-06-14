import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarChooserComponent } from './grammar-chooser/grammar-chooser.component';
import { LearnFiguresComponent } from './learn-figures/learn-figures.component';

const routes: Routes = [
  { path: 'polish/grammar/:id', component: GrammarComponent },
  { path: 'polish', component: GrammarChooserComponent },
  { path: 'learnFigures', component: LearnFiguresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
