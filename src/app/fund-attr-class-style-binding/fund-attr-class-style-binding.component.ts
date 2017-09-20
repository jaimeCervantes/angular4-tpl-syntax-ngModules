import { Component } from '@angular/core';

@Component({
  selector: 'fund-attr-class-style-binding',
  templateUrl: './fund-attr-class-style-binding.component.html',
  styles: [
    '.red { color: red}'
  ]
})

export class FundAttrClassStyleBindingComponent {
  private actionName = 'Enviar';
  private classBinding = 'tres dos uno';
  private isSpecial = 'is-special';
}
