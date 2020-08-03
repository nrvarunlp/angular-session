import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css'],
})
export class Practice1Component implements OnInit {
  constructor() {}
  title: string = 'Logic to loop through data';
  games: any[] = ['Shuttle Badminton', 'Volleyball', 'Table Tennis', 'Carrom'];

  infoList: any = { name: 'Logic 1', id: 'one01' };

  showInfo: boolean = true;

  onClickShowGames(a) {
    console.log(this.games);
    // alert(this.games);
  }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my Game!';
  }
  ngOnInit(): void {
    this.onClickShowGames(2);
  }
}
