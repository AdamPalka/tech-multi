import { Component, OnInit } from '@angular/core';
import { GrammarRuleSet } from '../grammar-rule-set';

@Component({
  selector: 'app-grammar-chooser',
  templateUrl: './grammar-chooser.component.html',
  styleUrls: ['./grammar-chooser.component.css']
})
export class GrammarChooserComponent implements OnInit {
  
  grammarRuleSets = [new GrammarRuleSet(1, 'CH',0),
                    new GrammarRuleSet(2, 'RZ',0),
                    new GrammarRuleSet(2, 'U',0),
                    new GrammarRuleSet(2, 'Ą',0)]
  constructor() { }

  ngOnInit() {
    this.grammarRuleSets.forEach(element => {
      if(localStorage.getItem('grammar-' + element.id)) {
        element.points =  +(localStorage.getItem('grammar-' + element.id));
      } else {
        element.points = 0;
      }
    });

  }

}
