export class LevelModel {
    imageSource: string;
    shapeToCountName: string;
    answerLeft: number;
    answerMid: number;
    answerRight: number;
    correctAnswer: number;

    constructor(imageSource: string, shapeToCountName: string, answerLeft: number, answerMid: number,
                answerRight: number, correctAnswer: number) {
      this.imageSource = imageSource;
      this.shapeToCountName = shapeToCountName;
      this.answerLeft = answerLeft;
      this.answerMid = answerMid;
      this.answerRight = answerRight;
      this.correctAnswer = correctAnswer;
     }
}
