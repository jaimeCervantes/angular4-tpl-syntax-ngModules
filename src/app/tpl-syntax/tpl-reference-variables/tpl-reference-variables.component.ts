import { Component } from '@angular/core';

@Component({
  selector: 'tpl-reference-variables',
  templateUrl: './tpl-reference-variables.component.html'
})

export class TplReferenceVariablesComponent {

  currentValue: any;
  submitMessage = 'Mensaje de algo';
  person = {};

  showCurrentValue (value: any) {
    this.currentValue = value;
  }

  onSubmit(personForm: any): void {
    console.log(personForm);
    console.log(personForm.form);
  }
}
