import {HostListener, Injectable} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;
  public showInstallButton = new BehaviorSubject(false);

  constructor(private platform: Platform) {
  }


  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.promptEvent = e;
    this.showInstallButton.next(false);
  }

  initPwa() {}

  promptInstallation() {
    try {
      this.promptEvent.prompt();
    } catch (e) {
      alert('An error occurred during installation');
    }
  }

  canShowButton() {
    return this.showInstallButton;
  }
}
