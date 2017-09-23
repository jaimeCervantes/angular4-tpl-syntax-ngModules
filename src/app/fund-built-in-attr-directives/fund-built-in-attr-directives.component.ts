import { Component } from '@angular/core';

@Component({
  selector: 'fund-built-in-attr-directives',
  templateUrl: './fund-built-in-attr-directives.component.html',
  styleUrls: ['./fund-built-in-attr-directives.component.css']
})

export class FundBuiltInAttrDirectivesComponent {
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
