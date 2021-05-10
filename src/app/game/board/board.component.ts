import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GameOverDialogComponent } from 'src/app/game-over-dialog/game-over-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  matrix = [[null, null, null], [null, null, null], [null, null, null]];
  turn = 'X'
  winner = '';
  counter:number = 0;
  
  ngOnInit(): void {
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

  isWinner(){
    // return false;
    let rowSize = 3, colSize = 3;
    for(let row = 0; row<rowSize; row += 1){
      let value = this.matrix[row][0];
      let flag:Boolean = true;
      if(!value || value != this.getTurn())
        continue;
      for(let col = 1; col < colSize; col += 1){
        if(this.matrix[row][col] != value){
          flag = false;
          break;
        }
      }
      if(flag){
        return true;
      }
    }

    for(let col = 0; col < colSize; col += 1){
      let value = this.matrix[0][col];
      let flag:Boolean = true;
      if(!value || value != this.getTurn())
        continue;
      for(let row = 1; row < rowSize; row += 1){
        if(this.matrix[row][col] != value){
          flag = false;
          break;
        }
      }
      if(flag){
        return true;
      }
    }

    let value = this.matrix[0][0];
    if(value === this.getTurn()){
      let flag:Boolean = true;
      for(let i=1; i<rowSize; i++){
        if(this.matrix[i][i] != value){
          flag = false;
          break;
        }
      }
      if(flag) return true;
    }
    
    value = this.matrix[0][colSize-1];
    if(value === this.getTurn()){
      let flag:Boolean = true;
      for(let i=1; i<rowSize; i++){
        if(this.matrix[i][rowSize - i - 1] != value){
          flag = false;
          break;
        }
      }
      if(flag) return true;
    }

    return false;
  }

  isDraw(){
    if(this.counter >= 9)
      return true;
    return false;
  }

  clicked(i, cell){
    if(!cell[i]){
      this.counter++;
      
      cell[i] = this.getTurn();
      if(this.isWinner()){
        this.winner = this.turn + ` is a winner!`;
        this.openDialog();
      } else if(this.isDraw()){
        this.winner = "It's a draw!";
        this.openDialog();
      } else{
        this.changeTurn(); 
      }
    }   
  }

  restart(){
    this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
    this.turn = 'X'
    this.winner = '';
    this.counter = 0;
  }

  openDialog() {
    this.dialog.open(GameOverDialogComponent, {data : {winner : this.winner}});
    this.restart();
  }

}
