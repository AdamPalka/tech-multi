import { Component, OnInit, ViewChild } from '@angular/core';

import { GrammarRule } from '../grammar-rule';
import { ActivatedRoute } from '@angular/router';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {


  grammarHints = [
    "U piszemy w czasownikach zakończonych na: uj, ujesz, uje",
    "U piszemy w czasownikach typu: czuć, kuć, kłuć, pruć",
    "Ó piszemy, gdy wymienia się w innych formach tego samego wyrazu lub w innych wyrazach na: o, e, a",
    "Ó piszemy w wyrazach zakończonych na: - ów",
    "Ó piszemy w wyrazach zakończonych na: - ówka",
    "Ó piszemy na początku wyrazów",
    "H piszemy tak o",
    "Ch piszemy po literze S"
  ]

  grammarRules = [
    [
    new GrammarRule(1, '', 'rbata', '', "H", 'assets/img/herbata.jpg', 6),
    new GrammarRule(2, 'S', 'ab', '', "ch", 'assets/img/schab.jpg',7),
    new GrammarRule(3, 'W', 'z', '', "ó", 'assets/img/woz.jpg', 0),
    new GrammarRule(4, 'K', 'zka', '', "ó", 'assets/img/koza.jpg', 0),
    new GrammarRule(5, 'K', 'ra', '', "u", 'assets/img/kura.jpg', 0),
    new GrammarRule(6, 'Str', 'mien', '', "u", 'assets/img/strumien.jpg', 0),
    new GrammarRule(7, 'G', 'ry', '', "ó", 'assets/img/gory.jpg', 0),
    new GrammarRule(8, 'M', 'r', '', "u", 'assets/img/mur.jpg', 0),
    new GrammarRule(9, 'St', 'ł', '', "ó", 'assets/img/stol.jpg', 0)
    ], 
    [
      new GrammarRule(1, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(2, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(3, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(4, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(5, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(6, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(7, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(8, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
      new GrammarRule(9, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
    ],
    [
    new GrammarRule(1, 'Chm', 'ry', '', "u", 'assets/img/chmury.jpg', 0),
    new GrammarRule(2, 'N', 'żka', '', "ó", 'assets/img/nozka.jpg', 0),
    new GrammarRule(3, 'W', 'z', '', "ó", 'assets/img/woz.jpg', 0),
    new GrammarRule(4, 'K', 'zka', '', "ó", 'assets/img/koza.jpg', 0),
    new GrammarRule(5, 'K', 'ra', '', "u", 'assets/img/kura.jpg', 0),
    new GrammarRule(6, 'Str', 'mien', '', "u", 'assets/img/strumien.jpg', 0),
    new GrammarRule(7, 'G', 'ry', '', "ó", 'assets/img/gory.jpg', 0),
    new GrammarRule(8, 'M', 'r', '', "u", 'assets/img/mur.jpg', 0),
    new GrammarRule(9, 'St', 'ł', '', "ó", 'assets/img/stol.jpg', 0)
    ]
  ];
  grammarId = 0;
  grammarIndex = Math.floor(Math.random() * (9 - 1)) + 1;
  grammar = this.grammarRules[this.grammarId][this.grammarIndex];
  userAns = '';
  points = 0;
  hint = '';
  isGoodAnswer = false;
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
 
  constructor(private route: ActivatedRoute, private toastr: ToastrService) {}

  onGrammarCheck() { // without type info
    console.log('UserAns: ' + this.grammar.userAnswer);
    console.log('.grammar.goodAnswer: ' + this.grammar.goodAnswer);
    if (this.grammar.userAnswer == this.grammar.goodAnswer) {
      this.isGoodAnswer = true;
      this.points +=1;
      this.grammar.userAnswer = '';
      this.grammarIndex = Math.floor(Math.random() * (9 - 1)) + 1;
      this.grammar = this.grammarRules[this.grammarId][this.grammarIndex];
      this.userAns = '';
      this.hint = '';
      this.showToasterSuccess();
      localStorage.setItem('grammar-' + this.grammarId, "" +this.points);
    } else {
      this.isGoodAnswer = false;
      this.showToasterFailure();
    }
  }

  showHint() {
    this.hint = 'Podpowiedź: ' + this.grammarHints[this.grammar.hintId];
  }

  showToasterSuccess() {
    this.toastr.success("Brawo, to poprawna odpowiedź.")
  }

  showToasterFailure() {
    this.toastr.error("Niestety, odowiedź jest niepoprawna.");
  }
  ngOnInit() {
    this.grammarId = +this.route.snapshot.paramMap.get('id');

    if(localStorage.getItem('grammar-' + this.grammarId)) {
      this.points =  +(localStorage.getItem('grammar-' + this.grammarId));
    } else {
      this.points = 0;
    }
    this.grammar = this.grammarRules[this.grammarId][this.grammarIndex];
    this.toastr.overlayContainer = this.toastContainer;
  }

}
