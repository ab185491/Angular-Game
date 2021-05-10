import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unique-number-board',
  templateUrl: './unique-number-board.component.html',
  styleUrls: ['./unique-number-board.component.css']
})
export class UniqueNumberBoardComponent implements OnInit {

  constructor() { }

  matrix = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ];

  // set = new Set();
  container = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  ngOnInit(): void {
  }

  inRange(num, size){
    if(num >= 0 && num < size){
      return true;
    }
    return false;
  }

  isValid(num, row, col){
    // if(this.set.has(num)){
    //   return false;
    // }
    let xArray = [0, -1, 1, 0];
    let yArray = [-1, 0, 0, 1];
    let rowSize = 5, colSize = 5, checkSize=4;

    for(let i = 0; i < checkSize; i++){
      let rowX = xArray[i] + row;
      let colY = yArray[i] + col;      
      if(this.inRange(rowX, rowSize) && this.inRange(colY, colSize)){
      console.log(`row = ${row}, col= ${col}, i=${colY}, j=${rowX}`);
        if((this.matrix[colY][rowX] == num-1) || (this.matrix[colY][rowX] == num+1)){
          return false;
        }
      }
    }
    return true;
  }

  clicked(i, j, cell){
    
    if(!cell[i]){
      const index = Math.floor(Math.random() * this.container.length)
      let unique = this.container[index];
      this.container.splice(index, 1);
      // let unique = Math.floor(Math.random() * 25) + 1;
      while(!this.isValid(unique, j, i)){
        unique = Math.floor(Math.random() * 25) + 1;
      }
      cell[i] = unique;
      // this.set.add(unique);
    }
    
  }

  restart(){
    this.matrix = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];
    this.container = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    // this.set = new Set();
  }
}
