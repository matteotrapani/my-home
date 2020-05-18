import {Injectable, NgZone} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AlertComponent} from '../alert/alert.component';

@Injectable({providedIn: 'root'})
export default class DialogService {
  constructor(private dialog: MatDialog,
              private zone: NgZone) {
  }

  public open(
    header: string,
    message: string,
    action: () => void,
    caller: any
  ) {
    this.dialog.open(AlertComponent, {
      width: '300px',
      data: {
        header,
        message,
        action
      }
    });
  }
}
