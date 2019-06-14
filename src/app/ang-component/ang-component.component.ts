import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-component',
  templateUrl: './ang-component.component.html',
  styleUrls: ['./ang-component.component.css']
})
export class AngComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    require('../../js/jquery.min.js');
    require('../../js/main.js');
  }

}
