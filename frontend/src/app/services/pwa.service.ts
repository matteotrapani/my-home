import { Injectable } from '@angular/core';
import {Platform} from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(private platform: Platform) { }

  initPwa() {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
      });
    }
  }

  promptInstallation() {
    this.promptEvent.prompt();
  }
}
