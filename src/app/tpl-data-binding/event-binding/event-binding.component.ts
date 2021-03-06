import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../helper-classes/person';

@Component({
  selector: 'tpl-event-binding',
  templateUrl: './event-binding.component.html'
})

export class EventBindingComponent implements OnInit {

  private people: Person[];

  constructor (private peopleService: PeopleService) {}

  ngOnInit () {
    this.peopleService
    .getPeople()
    .then(people => this.people = people);
  }

  triggerAlert () {
    alert('Alerta disparado al click');
  }

  delete ($event) {
    alert('delete event escuchando')
    console.log($event);
  }
}
