import { Component, Input, HostBinding, HostListener } from '@angular/core';

import { Enum } from './enum';

@Component({
  selector: 'lib-button-lib',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-lib.component.scss'],
})
export class ButtonLibComponent {
  @Input() style?: Enum.ButtonStyle;
  @Input() size?: Enum.ButtonSize;

  @Input() shape?: Enum.ButtonShape;

  @Input() color?: Enum.ButtonColor;

  @Input() effect?: Enum.ButtonEffect;

  @Input() disabled?: string;

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color} ${
      this.disabled ? 'disabled' : ''
    } ${this.effect ? this.effect : ''} `;
  }
}
