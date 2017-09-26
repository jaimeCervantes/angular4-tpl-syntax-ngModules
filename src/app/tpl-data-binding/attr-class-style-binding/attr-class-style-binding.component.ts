import { Component } from '@angular/core';

@Component({
  selector: 'tpl-attr-class-style-binding',
  templateUrl: './attr-class-style-binding.component.html',
  styles: [
    '.red { color: red}'
  ]
})

export class AttrClassStyleBindingComponent {
  private actionName = 'Enviar';
  private classBinding = 'tres dos uno';
  private isSpecial = 'is-special';
}
