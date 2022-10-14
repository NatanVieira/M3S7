import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto2';

  cadastroMateria = new FormGroup({
    nome: new FormControl([ Validators.minLength(3), Validators.required]),
    escola: new FormControl([Validators.required, Validators.minLength(3)]),
    cargaHoraria: new FormControl([Validators.required, Validators.max(100), Validators.min(30)]),
    modalidade: new FormGroup({
      opcional: new FormControl(Validators.required),
      obrigatoria: new FormControl(Validators.required)
    }),
    professor: new FormGroup({
      professor: new FormControl(Validators.required)
    })
  });

  resetaForms(){
    this.cadastroMateria.reset();
  }
}
