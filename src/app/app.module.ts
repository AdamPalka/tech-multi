import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LearnFiguresComponent } from './learn-figures/learn-figures.component';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarChooserComponent } from './grammar-chooser/grammar-chooser.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GrammarHintComponent } from './grammar-hint/grammar-hint.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnFiguresComponent,
    GrammarComponent,
    GrammarChooserComponent,
    NavBarComponent,
    GrammarHintComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
