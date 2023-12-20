import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color: String = '';
  @Input() text: String = '';
  @Output() btnClick = new EventEmitter();

  onButtonClick() {
    this.btnClick.emit();
  }
}
