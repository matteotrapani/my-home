import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;
  public showInstallButton = new BehaviorSubject(false);

  constructor() {}

  initPwa() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.promptEvent = e;
      this.showInstallButton.next(true);
    });
  }

  promptInstallation() {
    try {
      this.promptEvent.prompt();
    } catch (e) {
      alert('An error occured during installation');
    }
  }
}
