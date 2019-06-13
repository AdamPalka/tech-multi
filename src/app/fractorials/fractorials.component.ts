import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fractorials',
  templateUrl: './fractorials.component.html',
  styleUrls: ['./fractorials.component.css']
  
})
export class FractorialsComponent implements OnInit {
  FirstTopOne = 5;
  zad1 = false;
  zad2 = false;
  zad3 = false;
  zad4 = false;
  zad5 = false;
  firstTop='1';
  firstBot='2';
  secondTop='3';
  secondBot='4';
  thirdTop='5';
  thirdBot='6';
  constructor() { }
  firstValue=0;
  secondValue=0;
  thirdValue=5;
  rozwiazanie='';
  ifValid=false;
  ngOnInit() {
  }
  onKey1(event) {this.firstValue = event.target.value;}
  onKey2(event) {this.secondValue = event.target.value;}
  onKey3(event) {this.thirdValue = event.target.value;}
  
  FractorialsZad1(){
    this.ModifySolution();
    this.ifValid=false;
    this.zad1=true;
    this.zad2=false;
    this.zad3=false;
    this.zad4=false;
    this.zad5=false;
    this.firstBot='9';
    this.secondValue=5;
    this.thirdValue=8;
    this.secondBot='9';
    this.thirdBot='9';
    this.secondTop='5';
    this.thirdTop='8'
  }
  FractorialsZad2(){
    this.ModifySolution();
    this.zad1=false;
    this.zad2=true;
    this.zad3=false;
    this.zad4=false;
    this.zad5=false;
    this.firstBot='8';
    this.secondBot='8';
    this.thirdBot='8';
    this.firstValue=1;
    this.firstTop='1';
    this.thirdTop='3';
    this.thirdValue=3;

  }
  FractorialsZad3(){
    this.ModifySolution();
    this.zad1=false;
    this.zad2=false;
    this.zad3=true;
    this.zad4=false;
    this.zad5=false;
    this.firstBot='6';
    this.secondBot='6';
    this.thirdBot='6';
    this.firstValue=3;
    this.firstTop='3';
    this.secondValue=2;
    this.secondTop='2';
  }
  FractorialsZad4(){
    this.ModifySolution();
    this.zad2=true;
    this.zad3=false;
    this.zad4=true;
    this.zad5=false;
    this.firstBot='7';
    this.secondBot='7';
    this.thirdBot='7';
    this.firstValue=5;
    this.firstTop='5';
    this.thirdTop='2';
    this.thirdValue=2;
    }
  FractorialsZad5(){ 
    this.ModifySolution();
    this.zad1=false;
    this.zad2=false;
    this.zad3=true;
    this.zad4=false;
    this.zad5=true;
    this.firstBot='8';
    this.secondBot='8';
    this.thirdBot='8';
    this.firstValue=8;
    this.firstTop='8';
    this.secondValue=6;
    this.secondTop='6';
  }
  ModifySolution()
  {
    this.rozwiazanie='';
    this.ifValid=false;
  }
  getUrl()
{
  return "url('https://image.freepik.com/free-vector/children-counting-numbers-one-four_1308-3061.jpg')";
}

firstClick() {
  this.ifValid=true;
  if(this.zad4==true || this.zad5==true)
  {
    if((this.firstValue*1)-(this.secondValue*1)==(this.thirdValue*1))
    this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
    
    else
    this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
  }
  else
  {
    if((this.firstValue*1)+(this.secondValue*1)==(this.thirdValue*1))
    this.rozwiazanie='Brawo! To jest poprawna odpowiedz';
    
    else
    this.rozwiazanie='Niestety, rozwiązanie jest błędne :(';
  }
}
}
