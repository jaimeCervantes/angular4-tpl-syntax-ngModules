import { Component } from '@angular/core';

@Component({
  selector: 'tpl-built-in-attr-directives',
  templateUrl: './built-in-attr-directives.component.html',
  styleUrls: ['./built-in-attr-directives.component.css']
})

export class BuiltInAttrDirectivesComponent {
  private isSpecial = true;
  private isUnchanged = false;
  private canSave = true;

  private currentClasses = {};
  private currentStyles = {};

  setCurrentClasses () {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };
  }

  setCurrentStyles () {
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px',
      'padding': '10px',
      'background-color': 'red'
    };
  }
}
