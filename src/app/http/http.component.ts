import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  public number1: number;
  public number2: number;
  public result: number;

  getData: any = null;
  postData: any = null;
  myjson = JSON;

  constructor(private http: HttpClient) {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        this.getData = data;
      });
  }

  ngOnInit() {}

  addition() {
    this.result = this.number1 + this.number2;
  }
  subtraction() {
    this.result = this.number1 - this.number2;
  }
  multiplication() {
    this.result = this.number1 * this.number2;
  }
  division() {
    this.result = this.number1 / this.number2;
  }
}
