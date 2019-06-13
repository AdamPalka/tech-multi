import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japanese-question',
  templateUrl: './japanese-question.component.html',
  styleUrls: ['./japanese-question.component.css']
  
})
export class JapaneseQuestionComponent implements OnInit {

  zad1 = false;
  zad2 = true;
  zad3 = true;
  zad4 = true;
  zad5 = true;
  constructor() { }
  value=0;
  rozwiazanie='';
  NotVisible=true;
  isCorrect=false;
  ngOnInit() {
  }
  onKey1(event) {this.value = event.target.value;
    this.NotVisible=true;}
 
  JapaneseZad1(){
    this.ModifySolution();

    this.zad1=false;
    this.zad2=true;
    this.zad3=true;
    this.zad4=true;
    this.zad5=true;

  }
  JapaneseZad2(){
    this.ModifySolution();
    this.zad1=true;
    this.zad2=false;
    this.zad3=true;
    this.zad4=true;
    this.zad5=true;


  }
  JapaneseZad3(){
    this.ModifySolution();
    this.zad1=true;
    this.zad2=true;
    this.zad3=false;
    this.zad4=true;
    this.zad5=true;
  
  }
  JapaneseZad4(){
    this.ModifySolution();
    this.zad1=true;
    this.zad2=true;
    this.zad3=true;
    this.zad4=false;
    this.zad5=true;
   
    }
    JapaneseZad5(){ 
    this.ModifySolution();
    this.zad1=true;
    this.zad2=true;
    this.zad3=true;
    this.zad4=true;
    this.zad5=false;
  
  }
  ModifySolution()
  {
    this.rozwiazanie='';
    this.NotVisible=true;
    this.isCorrect=false;
  }


  firstClick() {
    this.NotVisible=false;
    if(this.zad1==false)
    {
      if((this.value*1)==121)
      {
      this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
      this.isCorrect=true;
      }
      else
      {
        this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
        this.isCorrect=false;
      }
    }
    if(this.zad2==false)
    {
      if(this.value*1==198)
      {
      this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
      this.isCorrect=true;
      }
      else
      {
      this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
      this.isCorrect=false;
      }
    }
    if(this.zad3==false)
    {
      if(this.value*1==322)
      {
      this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
      this.isCorrect=true;
      }
      else
      {
      this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
      this.isCorrect=false;
      }
    }
    if(this.zad4==false)
    {
      this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
      this.isCorrect=true;
      }
      else
      {
      this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
      this.isCorrect=false;
      }
    if(this.zad5==false)
    {
      this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
      this.isCorrect=true;
      }
      else
      {
      this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
      this.isCorrect=false;
      }
    }


}
