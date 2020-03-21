import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as toPinyin from "chinese-to-pinyin";

var pinyin = require("chinese-to-pinyin")

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  result

  test(userGivenText) {
    this.result = pinyin(userGivenText.value)
  }
  constructor() { }

  ngOnInit() {
  }

}