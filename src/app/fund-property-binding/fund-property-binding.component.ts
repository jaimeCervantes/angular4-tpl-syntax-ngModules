import { Component } from '@angular/core';

@Component({
  selector: 'fund-property-binding',
  templateUrl: './fund-property-binding.component.html'
})

export class FundPropertyBindingComponent {
  private isUnchanged = true;
  private classes = { clase1: true, clase2: true };
  private whichOne = 'Interpolation or property binding';
  private logoUrl = 'assets/logo-angular.png';
  private evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
}
