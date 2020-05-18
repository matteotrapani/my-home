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
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.promptEvent = e;
    alert('before install prompt');
    this.showInstallButton.next(true);
  }

  initPwa() {}

  promptInstallation() {
    try {
      this.promptEvent.prompt();
    } catch (e) {
      alert('An error occured during installation');
    }
  }
}
