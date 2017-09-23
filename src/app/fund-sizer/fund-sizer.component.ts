import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fund-sizer',
  templateUrl: './fund-sizer.component.html'
})

export class FundSizerComponent {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  /**
   * Alias
   * Puedes agregar un alias, asi cuando quierar hacer un Property binding se utilizaria 'sizeX'
   * Y cuando quieras hacer un Event binding utilizarias 'sizeXChange'
   * @Input('sizeX') size: number | string;
   * @Output('sizeChangeX') sizeChange = new EventEmitter<number>();
   */

  inc() {
   this.resize(+1);
  }

  dec () {
   this.resize(-1);
  }

  resize (amount: number) {
    // Minimo 8 y maximo 40
    this.size = Math.min(40, Math.max(8, +this.size + amount));
    this.sizeChange.emit(this.size);
  }
}
