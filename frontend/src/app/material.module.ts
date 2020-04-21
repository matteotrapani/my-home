import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
