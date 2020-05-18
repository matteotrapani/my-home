import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {SwUpdate} from '@angular/service-worker';
import DialogService from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;
  public showInstallButton = new BehaviorSubject(false);
  private swUpdatesSubscription: Subscription;

  constructor(
    private readonly updates: SwUpdate,
    private readonly dialogService: DialogService
  ) {}

  initPwa() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.promptEvent = e;
      this.showInstallButton.next(true);
    });

    this.swUpdatesSubscription = this.updates.available.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  promptInstallation() {
    try {
      this.promptEvent.prompt();
    } catch (e) {
      alert('An error occured during installation');
    }
  }

  showAppUpdateAlert() {
    const header = 'App Update available';
    const message = 'Choose Ok to update';
    const action = this.doAppUpdate;
    const caller = this;
    this.dialogService.open(header, message, action, caller);
  }
  doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
