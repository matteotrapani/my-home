import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  header = '';
  message = '';
  action: () => void;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.header = data.header;
    this.message = data.message;
    this.action = data.action;
  }

  ngOnInit(): void {
  }

}
