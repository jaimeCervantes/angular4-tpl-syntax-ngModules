import { Component } from '@angular/core';

@Component({
  selector: 'tpl-tpl-expr-operators',
  templateUrl: 'tpl-expr-operators.component.html'
})

export class TplExprOperatorsComponent {
  title = 'Titulo de prueba para pipes';
  person = {
    nombre: 'Jaime',
    edad: 29,
    fechaNacimiento: '1987-10-28T08:00:00.000Z',
    hijos: [{
      nombre: 'Jaimito',
      edad: '9 meses',
      fechaNacimiento: '2016-12-27T08:00:00.000Z',
    }]
  };

}
