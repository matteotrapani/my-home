import { Component, OnInit } from '@angular/core';
import {Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private promptEvent: any;

  constructor(private platform: Platform) { }

  ngOnInit(): void {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
      });
    }
  }

  installPwa() {
    this.promptEvent.prompt();
  }

}
