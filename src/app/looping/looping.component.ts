import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrls: ['./looping.component.css'],
})
export class LoopingComponent implements OnInit {
  constructor() {}
  title: string = 'Logic to loop through data';
  games: any[] = ['Shuttle Badminton', 'Volleyball', 'Table Tennis', 'Carrom'];
  showInfo: boolean = true;
  infoList: any = { name: 'Logic 1', id: 'one01' };
  clickMessage = '';

  onClickShowGames(a) {
    console.log(this.games);
    // alert(this.games);
  }

  onClickMe() {
    this.clickMessage = 'Viola, the click event is fired!';
  }
  ngOnInit(): void {
    this.onClickShowGames(2);
  }
}
