import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fractorials2',
  templateUrl: './fractorials2.component.html',
  styleUrls: ['./fractorials2.component.css']
})
export class Fractorials2Component implements OnInit {
  zad1=false;
  zad2=true;
  zad3=true;
  zad4=true;
  zad5=true;
  zad1solved=false;
  zad2solved=false;
  zad3solved=false;
  zad4solved=false;
  zad5solved=false
  rozwiazanie='test';
  firstValue=0;
  secondValue=0;
  visible=true;
  constructor() { }
  
  ngOnInit() {
  }

  onKey1(event) {this.firstValue = event.target.value;
    this.visible=true;}
  onKey2(event) {this.secondValue = event.target.value;
    this.visible=true;}

  FractorialsZad1(){
  this.zad1=false;
  this.zad2=true;
  this.zad3=true;
  this.zad4=true;
  this.zad5=true;
  this.visible=true;
  }
  FractorialsZad2(){
  this.zad1=true;
  this.zad2=false;
  this.zad3=true;
  this.zad4=true;
  this.zad5=true;
  this.visible=true;
    }
  FractorialsZad3(){
  this.zad1=true;
  this.zad2=true;
  this.zad3=false;
  this.zad4=true;
  this.zad5=true;
  this.visible=true;
    }   
  FractorialsZad4(){
  this.zad1=true;
  this.zad2=true;
  this.zad3=true;
  this.zad4=false;
  this.zad5=true;
  this.visible=true;
    }
  FractorialsZad5(){
  this.zad1=true;
  this.zad2=true;
  this.zad3=true;
  this.zad4=true;
  this.zad5=false;
  this.visible=true;
    }

 
    firstClick() {
      this.visible=false;
      if(this.zad1==false)
      {
        if((this.secondValue*1)/(this.firstValue*1)==5)
        {
        this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
        this.zad1solved=true;
        }
        else
        {
        this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
        this.zad1solved=false;
        }
      }
      if(this.zad2==false)
      {
        if((this.secondValue*1)/(this.firstValue*1)==2)
        {
          this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
          this.zad2solved=true;
       }
        else
          {
          this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
          this.zad2solved=false;
          }
      }
      if(this.zad3==false)
      {
        if((this.secondValue*1)/(this.firstValue*1)==5/4)
        {
          this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
          this.zad3solved=true;
          }
          else
          {
          this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
          this.zad3solved=false;
          }
      }
      if(this.zad4==false)
      {
        if((this.secondValue*1)/(this.firstValue*1)==7/5)
        {
          this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
          this.zad4solved=true;
          }
          else
          {
          this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
          this.zad4solved=false;
          }      }
      if(this.zad5==false)
      {
        if((this.secondValue*1)/(this.firstValue*1)==11/7)
        {
          this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
          this.zad5solved=true;
          }
          else
          {
          this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
          this.zad5solved=false;
          }}
 
      }
    }  




