import {Component, OnDestroy, OnInit} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {PwaService} from '../services/pwa.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public showButton: boolean;
  private showButtonSubscription: Subscription;

  constructor(private pwaService: PwaService) {
    alert('HOME COMPONENT');
  }

  ngOnInit(): void {
    alert('HOME COMPONENT ON INIT');
    this.showButtonSubscription = this.pwaService.showInstallButton.subscribe(canShow => {
      alert('SHOW INSTALL BUTTON ' + canShow);
      this.showButton = canShow;
    });
    alert(this.showButtonSubscription);
  }
  ngOnDestroy(): void {
    this.showButtonSubscription.unsubscribe();
  }

  installPwa() {
    this.pwaService.promptInstallation();
  }

}
