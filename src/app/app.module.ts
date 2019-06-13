import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FractorialsComponent,
    FractorialGuideComponent,
    Fractorials2Component,
    JapaneseZadComponent,
    JapaneseMenuComponent,
    JapaneseGuideComponent,
    JapaneseQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
