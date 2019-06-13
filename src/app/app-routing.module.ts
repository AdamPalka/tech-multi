import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import { FractorialsComponent } from './fractorials/fractorials.component';
import { FractorialGuideComponent } from './fractorial-guide/fractorial-guide.component';
import { Fractorials2Component } from './fractorials2/fractorials2.component';
import { JapaneseMenuComponent } from './japanese-menu/japanese-menu.component';
import { JapaneseZadComponent } from './japanese-menu/japanese-zad/japanese-zad.component';
import { JapaneseGuideComponent } from './japanese-menu/japanese-guide/japanese-guide.component';
import { JapaneseQuestionComponent } from './japanese-menu/japanese-question/japanese-question.component';




const routes: Routes = [
  {path: 'fractorials', component: FractorialsComponent}, 
  {path: 'fractorial-guide', component: FractorialGuideComponent},
  {path: '', component: MenuComponent},
  {path: 'fractorials2', component: Fractorials2Component},
  {path: 'japanese-menu', component: JapaneseMenuComponent},
  {path: 'japanese-zad', component: JapaneseZadComponent},
  {path: 'japanese-guide', component: JapaneseGuideComponent},
  {path: 'japanese-question', component: JapaneseQuestionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
