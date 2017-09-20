import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Person } from '../helper-classes/person';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleService {

  private urlPeopleApi = '/api/people';

  constructor (private http: Http) {}

  private handleError (error: any): Promise<any> {
    console.log('Error: ' + error);
    return Promise.reject(error);
  }

  getPeople () {
    return this.http
      .get(this.urlPeopleApi)
      .toPromise()
      .then(response => response.json().data as Person[])
      .catch(this.handleError);
  }

  getPerson(id: number) {
    const url = `${this.urlPeopleApi}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Person)
      .catch(this.handleError);
  }
}
