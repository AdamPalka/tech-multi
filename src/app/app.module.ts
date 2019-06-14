import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FractorialsComponent } from './fractorials/fractorials.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FractorialGuideComponent } from './fractorial-guide/fractorial-guide.component';
import { Fractorials2Component } from './fractorials2/fractorials2.component';
import { JapaneseZadComponent } from './japanese-menu/japanese-zad/japanese-zad.component';
import { JapaneseMenuComponent } from './japanese-menu/japanese-menu.component';
import { JapaneseGuideComponent } from './japanese-menu/japanese-guide/japanese-guide.component';
import { JapaneseQuestionComponent } from './japanese-menu/japanese-question/japanese-question.component';

import { LearnFiguresComponent } from './learn-figures/learn-figures.component';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarChooserComponent } from './grammar-chooser/grammar-chooser.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GrammarHintComponent } from './grammar-hint/grammar-hint.component';
import { AngComponentComponent } from './ang-component/ang-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnFiguresComponent,
    GrammarComponent,
    GrammarChooserComponent,
    NavBarComponent,
    GrammarHintComponent,
    MenuComponent,
    FractorialsComponent,
    FractorialGuideComponent,
    Fractorials2Component,
    JapaneseZadComponent,
    JapaneseMenuComponent,
    JapaneseGuideComponent,
    JapaneseQuestionComponent,
    AngComponentComponent  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
