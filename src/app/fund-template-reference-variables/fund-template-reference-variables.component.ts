import { Component } from '@angular/core';

@Component({
  selector: 'fund-template-reference-variables',
  templateUrl: './fund-template-reference-variables.component.html'
})

export class FundTemplateReferenceVariablesComponent {

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
