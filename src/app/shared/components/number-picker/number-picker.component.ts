import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-picker',
  imports: [],
  templateUrl: './number-picker.component.html',
  styleUrl: './number-picker.component.scss',
})
export class NumberPickerComponent {
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;

  @Output() valueChange = new EventEmitter<number>();

  increase() {
    if (this.value + this.step <= this.max) {
      this.value += this.step;
      this.valueChange.emit(this.value);
    }
  }

  decrease() {
    if (this.value - this.step >= this.min) {
      this.value -= this.step;
      this.valueChange.emit(this.value);
    }
  }

  onInputChange(event: any) {
    let newValue = Number(event.target.value);
    if (newValue >= this.min && newValue <= this.max) {
      this.value = newValue;
      this.valueChange.emit(this.value);
    }
  }
}
