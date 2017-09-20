import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb () {
    let people = [
      {
        id: 1,
        name: 'Jaime Cervantes',
        age: 29
      },
      {
        id: 2,
        name: 'Juan Cervantes',
        age: 35,
      }
    ];

    return { people };
  }
}