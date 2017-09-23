import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../helper-classes/person';

@Component({
  selector: 'fund-built-in-struct-directives',
  templateUrl: './fund-built-in-struct-directives.component.html',
  styleUrls: ['./fund-built-in-struct-directives.component.css']
})

export class FundBuiltInStructDirectivesComponent implements OnInit {
  isVisible = true;
  people: Person[];
  personSelected = 3;

  constructor (private peopleService: PeopleService) {}

  ngOnInit () {
    this.peopleService
    .getPeople()
    .then(people => this.people = people);
  }

  setVisibility () {
    this.isVisible = !this.isVisible;
  }

  trackByPerson (index: number, person: Person): number {
    return person.id;
  }

  delete (person: Person) {
    const index = this.people.findIndex(elem => elem.id === person.id);
    this.people.splice(index, 1);
  }

  getPerson(index: number): object {
    if (this.people && this.people.length > 0) {
      return this.people[Number(index)];
    }

    // return {};
  }
}
