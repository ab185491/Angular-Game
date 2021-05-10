import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  matrix = [['X', 'O', null], ['X', null, null], [null, null, null]];
  turn = 'X';

  getMatrix(){
    return this.matrix;
  }

  getTurn(){
    return this.turn;
  }

  changeTurn(){
    if(this.turn === 'X'){
      this.turn = 'O';
    } else{
      this.turn = 'X';
    }
  }

  isDraw(){
    return false;
  }

  isWinner(){
    return false;
  }

}
