import { Component, OnInit } from '@angular/core';
import { LevelModel } from './level-model';

@Component({
  selector: 'app-learn-figures',
  templateUrl: './learn-figures.component.html',
  styleUrls: ['./learn-figures.component.css']
})

export class LearnFiguresComponent implements OnInit {

  isOpen = true;
  shapeToCountName: string;
  imageSource: string;
  answerLeft: number;
  answerMid: number;
  answerRight: number;
  correctAnswer: number;
  isAnswerCorrect = true;
  currentLevelModel: LevelModel;
  levelModels: Array<LevelModel>;
  buttonColor: '#ccc';
  numberOfPoints: number;
  numberOfGuesses: number;

  constructor() { }

  ngOnInit() {
     this.levelModels = [new LevelModel('house.png', 'kwadratów', 4, 2, 3, 3),
                        new LevelModel('house.png', 'prostokątów', 3, 4, 6, 3),
                        new LevelModel('house.png', 'trójkątów', 4, 5, 6, 6),
                        new LevelModel('house.png', 'kół', 1, 2, 0, 1),
                        new LevelModel('bird.png', 'kwadratów', 0, 1, 3, 0),
                        new LevelModel('bird.png', 'prostokątów', 3, 4, 5, 3),
                        new LevelModel('bird.png', 'trójkątów', 6, 5, 7, 6),
                        new LevelModel('bird.png', 'kół', 1, 2, 3, 2),
                        new LevelModel('butterfly.png', 'kwadratów', 2, 3, 1, 1),
                        new LevelModel('butterfly.png', 'prostokątów', 3, 4, 2, 3),
                        new LevelModel('butterfly.png', 'trójkątów', 9, 7, 8, 8),
                        new LevelModel('butterfly.png', 'kół', 9, 7, 8, 7),
                        new LevelModel('crab.png', 'kwadratów', 2, 4, 0, 0),
                        new LevelModel('crab.png', 'prostokątów', 3, 4, 5, 4),
                        new LevelModel('crab.png', 'trójkątów', 7, 8, 6, 7),
                        new LevelModel('crab.png', 'kół', 4, 5, 6, 5),
                        new LevelModel('fish.png', 'kwadratów', 1, 2, 0, 1),
                        new LevelModel('fish.png', 'prostokątów', 3, 2, 1, 1),
                        new LevelModel('fish.png', 'trójkątów', 6, 5, 4, 5),
                        new LevelModel('fish.png', 'kół', 3, 1, 2, 2)];
     this.currentLevelModel = this.levelModels[0];
     this.imageSource = this.currentLevelModel.imageSource;
     this.shapeToCountName = this.currentLevelModel.shapeToCountName;
     this.answerLeft = this.currentLevelModel.answerLeft;
     this.answerMid = this.currentLevelModel.answerMid;
     this.answerRight = this.currentLevelModel.answerRight;
     this.correctAnswer = this.currentLevelModel.correctAnswer;
     this.numberOfPoints = 0;
     this.numberOfGuesses = 0;
  }

  setGameModel(gameModel: LevelModel) {
    this.imageSource = gameModel.imageSource;
    this.shapeToCountName = gameModel.shapeToCountName;
    this.answerLeft = gameModel.answerLeft;
    this.answerMid = gameModel.answerMid;
    this.answerRight = gameModel.answerRight;
    this.correctAnswer = gameModel.correctAnswer;
  }

  onLeftButtonClick() {
    console.log('Left button clicked');
    console.log('User answer:' + this.answerLeft);
    this.increaseNumberOfGuesses();
    if (this.checkCorrectAnswer(this.answerLeft)) {
      document.querySelector('body').style.cssText = '--left-answer-color-var: #00ff00';
      this.addPoints();
      console.log('Number of points:' + this.numberOfPoints);
    } else {
      document.querySelector('body').style.cssText = '--left-answer-color-var: red';
    }
  }

  onMidButtonClick() {
    console.log('Mid button clicked');
    console.log('User answer:' + this.answerMid);
    this.increaseNumberOfGuesses();
    if (this.checkCorrectAnswer(this.answerMid)) {
      document.querySelector('body').style.cssText = '--mid-answer-color-var: #00ff00';
      this.addPoints();
      console.log('Number of points:' + this.numberOfPoints);
    } else {
      document.querySelector('body').style.cssText = '--mid-answer-color-var: red';
      }
  }

  onRightButtonClick() {
    console.log('Right button clicked');
    console.log('User answer:' + this.answerRight);
    this.increaseNumberOfGuesses();
    if (this.checkCorrectAnswer(this.answerRight)) {
      document.querySelector('body').style.cssText = '--right-answer-color-var: #00ff00';
      this.addPoints();
      console.log('Number of guesses and points:' +  this.numberOfGuesses + '  ' +  this.numberOfPoints);
    } else {
      document.querySelector('body').style.cssText = '--right-answer-color-var: red';
    }
  }

  checkCorrectAnswer(userAnswer: number): boolean {
    if (userAnswer === this.currentLevelModel.correctAnswer) {
      this.isAnswerCorrect = false;
      return true;
    } else {
      this.isAnswerCorrect = true;
      return false;
    }
  }

  onNextLevelButtonClick() {
    this.currentLevelModel = this.getRandomGameModel();
    this.setGameModel(this.currentLevelModel);
    document.querySelector('body').style.cssText = '--left-answer-color-var: white';
    document.querySelector('body').style.cssText = '--mid-answer-color-var: white';
    document.querySelector('body').style.cssText = '--right-answer-color-var: white';
    this.isAnswerCorrect = true;
    this.numberOfGuesses = 0;
  }

  getRandomGameModel() {
    const index = Math.floor(Math.random() * (this.levelModels.length + 1));
    return this.levelModels[index];
  }

  addPoints() {
    if (this.numberOfGuesses === 1) {
      this.numberOfPoints = this.numberOfPoints + 2;
    } else if (this.numberOfGuesses === 2) {
      this.numberOfPoints = this.numberOfPoints + 1;
    }
  }

  increaseNumberOfGuesses() {
    this.numberOfGuesses = this.numberOfGuesses + 1;
  }

  savePointsToLocalStorage() {
    localStorage.setItem('points', '' + this.numberOfPoints);
  }
}


