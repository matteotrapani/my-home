import {HostListener, Injectable} from '@angular/core';
import {Platform} from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(private platform: Platform) {
    alert('service');
  }


  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    alert('beforeinstallprompt');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.promptEvent = e;
    // this.showButton = true;
  }

  initPwa() {
    // if (this.platform.ANDROID) {
    //   window.addEventListener('beforeinstallprompt', (event: any) => {
    //     alert('beforeinstallprompt');
    //     event.preventDefault();
    //     this.promptEvent = event;
    //   });
    // }
  }

  promptInstallation() {
    try {
      alert('install PWA');
      alert(this.promptEvent);
      this.promptEvent.prompt();

      alert('installed PWA');
    } catch (e) {
      alert(e);
    }
    // this.promptEvent.prompt();
  }
}
