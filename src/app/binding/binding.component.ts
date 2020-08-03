import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  imageUrlBind = 'https://picsum.photos/seed/picsum/400/300';

  value = '';
  isSpecial: false;
  numberA: number = 10;
  numberB: number = 20;
  constructor() {}
  clearValue() {
    this.value = '';
  }
  onSave() {
    console.log('Clicked');
    alert('Clicked');
  }
  ngOnInit(): void {}
}
