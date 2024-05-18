import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss'],
})
export class RegisterCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  constructor() { }

}
