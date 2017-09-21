import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../helper-classes/person';

@Component({
  selector: 'fund-person-detail',
  templateUrl: './fund-person-detail.html',
  styles: [`.person {
    border: 1px solid #ccc;
    background-color: #eeeeee;
    margin-bottom: 5px;
    margin-top:5px;
    padding: 10px;
  }`,
  `p {
    margin:0;
    padding:0;
  }`]
})

export class FundPersonDetailComponent {
 @Input() person: Person;

 @Output() deleteEvent = new EventEmitter<Person>();

 delete () {
  this.deleteEvent.emit(this.person);
 }
}
