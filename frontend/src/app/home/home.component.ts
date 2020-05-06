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
    alert('platform: ' + this.platform.ANDROID);
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        alert('add listener');
        event.preventDefault();
        this.promptEvent = event;
      });
    }
  }

  installPwa() {
    try {
      alert('install PWA');
      alert(this.promptEvent);
      this.promptEvent.prompt();

      alert('installed PWA');
    } catch (e) {
      alert(e);
    }
  }

}
