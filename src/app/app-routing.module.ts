import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GrammarComponent } from './grammar/grammar.component';
import { GrammarChooserComponent } from './grammar-chooser/grammar-chooser.component';
import { LearnFiguresComponent } from './learn-figures/learn-figures.component';
import {MenuComponent} from './menu/menu.component';
import { FractorialsComponent } from './fractorials/fractorials.component';
import { FractorialGuideComponent } from './fractorial-guide/fractorial-guide.component';
import { Fractorials2Component } from './fractorials2/fractorials2.component';
import { JapaneseMenuComponent } from './japanese-menu/japanese-menu.component';
import { JapaneseZadComponent } from './japanese-menu/japanese-zad/japanese-zad.component';
import { JapaneseGuideComponent } from './japanese-menu/japanese-guide/japanese-guide.component';
import { JapaneseQuestionComponent } from './japanese-menu/japanese-question/japanese-question.component';
import { AngComponentComponent } from './ang-component/ang-component.component';



const routes: Routes = [
  {path: 'fractorials', component: FractorialsComponent},
  {path: 'fractorial-guide', component: FractorialGuideComponent},
  {path: '', component: MenuComponent},
  {path: 'mathMenu', component: MenuComponent},
  {path: 'fractorials2', component: Fractorials2Component},
  {path: 'japanese-menu', component: JapaneseMenuComponent},
  {path: 'japanese-zad', component: JapaneseZadComponent},
  {path: 'japanese-guide', component: JapaneseGuideComponent},
  {path: 'japanese-question', component: JapaneseQuestionComponent},
  { path: 'polish/grammar/:id', component: GrammarComponent },
  { path: 'polish', component: GrammarChooserComponent },
  { path: 'ang', component: AngComponentComponent },
  { path: 'learnFigures', component: LearnFiguresComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
