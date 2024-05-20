import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { StorageService } from './services/storage.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    {
      title: 'Sair', url: '/signin', icon: 'log-out', click: () => {
        this.storage.clear();
      }
    },
  ];
  constructor(private storage: StorageService) {
  }
}
