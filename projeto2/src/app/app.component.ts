import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto2';

  cadastroMateria = new FormGroup({
    nome: new FormControl(),
    escola: new FormControl(),
    cargaHoraria: new FormControl(),
    modalidade: new FormGroup({
      opcional: new FormControl(),
      obrigatoria: new FormControl()
    }),
    professor: new FormGroup({
      professor: new FormControl()
    })
  });
}
