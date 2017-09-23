import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb () {
    const people = [
      {
        id: 1,
        name: 'Jaime Cervantes',
        age: 29
      },
      {
        id: 2,
        name: 'Juan Cervantes',
        age: 35
      },
      {
        id: 3,
        name: 'Adriana Cervantes',
        age: 31
      },
      {
        id: 4,
        name: 'Julio Cesar Cervantes',
        age: 33
      }
    ];

    return { people };
  }
}
