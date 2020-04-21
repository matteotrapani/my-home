import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export default class SnackbarService {
  constructor(private snackBar: MatSnackBar,
              private zone: NgZone) {
  }

  public showError(
    message: string,
    action = 'CLOSE',
    verticalPosition: MatSnackBarVerticalPosition = 'top',
    panelClass= 'background-red',
    duration = 50000
  ) {
    this.zone.run(() => this.snackBar.open(message, action, { verticalPosition, panelClass, duration }));
  }
}
