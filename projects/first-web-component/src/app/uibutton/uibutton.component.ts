import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uibutton',
  templateUrl: './uibutton.component.html',
  styleUrls: ['./uibutton.component.css'],
})
export class UIButtonComponent implements OnInit {
  @Input() testData: string = 'foo'; //default value
  constructor() {}

  ngOnInit(): void {}
}
