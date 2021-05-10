import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatDialogModule
]

@NgModule({
  imports : [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }
