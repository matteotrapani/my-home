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

  constructor(private pwaService: PwaService) {}

  ngOnInit(): void {
    this.showButtonSubscription = this.pwaService.showInstallButton.subscribe(canShow => {
      this.showButton = canShow;
    });
  }
  ngOnDestroy(): void {
    this.showButtonSubscription.unsubscribe();
  }

  installPwa() {
    this.pwaService.promptInstallation();
  }

}
