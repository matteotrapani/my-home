import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;
  public showInstallButton = new BehaviorSubject(false);

  constructor() {
    alert('SERVICE');
  }


  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    alert('before install prompt');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.promptEvent = e;
    this.showInstallButton.next(true);
  }

  initPwa() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      alert('before install prompt in init pwa');
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
