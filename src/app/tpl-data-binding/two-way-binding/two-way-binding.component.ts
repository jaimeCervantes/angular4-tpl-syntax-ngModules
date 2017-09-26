import { Component, OnInit } from '@angular/core';
import { Person } from '../../helper-classes/person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'tpl-two-way-binding',
  templateUrl: './two-way-binding.component.html'
})

export class TwoWayBindingComponent implements OnInit {
  private fontSizePx = 10;
  private name = 'Jaime Cervantes';
  private people: Person[];
  private selected = 'Juan Cervantes';

  constructor(private peopleService: PeopleService) { }

  ngOnInit () {
    this.peopleService
    .getPeople()
    .then(people => this.people = people);
  }

  setUpperCaseFirstName(name) {
    const arrName = name.split(/\s+/);
    const firstName = arrName.shift();
    this.name = firstName.toUpperCase() + ' ' + arrName.join(' ');
  }
}
