import { Component, OnInit } from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {PwaService} from '../services/pwa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private promptEvent: any;

  constructor(private pwaService: PwaService) {

    alert('home');
  }

  ngOnInit(): void {
  }

  installPwa() {
    this.pwaService.promptInstallation();
    // try {
    //   alert('install PWA');
    //   alert(this.promptEvent);
    //   this.promptEvent.prompt();
    //
    //   alert('installed PWA');
    // } catch (e) {
    //   alert(e);
    // }
  }

}
